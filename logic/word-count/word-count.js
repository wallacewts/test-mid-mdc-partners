import { createReadStream, statSync } from "fs";
import { promisify } from "util";
import { pipeline, Transform } from "node:stream";

export const wordCount = async (filePath) => {
  console.time("time");
  const fileData = statSync(filePath);
  const fileReadStream = createReadStream(filePath);
  const asyncPipeline = promisify(pipeline);
  const totalProgress = 60;
  let count = 0;
  let countChunkSize = 0;

  const countChunkWord = new Transform({
    transform(chunk, encoding, callback) {
      const chunkString = String(chunk);
      const mappedString = chunkString
        .replace(/[\n\r\'\’\-]/g, " ")
        .split(" ")
        .filter((word) => !!word);
      const wordCount = mappedString.length;
      count += wordCount;

      callback(null, chunk);
    },
  });
  const progressBar = new Transform({
    transform(chunk, encoding, callback) {
      countChunkSize += Buffer.byteLength(chunk);
      const chunkPercent = countChunkSize / fileData.size;
      const completedProgress = parseInt(chunkPercent * totalProgress);
      const unCompletedProgress = parseInt(totalProgress - completedProgress);
      const completedProgressPercent = chunkPercent * 100;
      completedProgress >= totalProgress ? totalProgress : completedProgress;

      const leftCharacters = "=".repeat(completedProgress);
      const rightCharacters = "-".repeat(unCompletedProgress);

      callback(
        null,
        `\r[${leftCharacters}${rightCharacters}] ${completedProgressPercent.toFixed(
          2
        )}% - ${completedProgress} / ${totalProgress}`
      );
    },
  });

  await asyncPipeline(
    fileReadStream,
    countChunkWord,
    progressBar,
    process.stdout,
    {
      end: false,
    }
  );
  console.log("\n");
  console.log("Word Count:", count);
  console.timeEnd("time");
};
