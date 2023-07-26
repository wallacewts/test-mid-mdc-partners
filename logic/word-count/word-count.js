import { createReadStream, statSync } from "fs";
import { promisify } from "util";
import { pipeline, Transform } from "node:stream";

export const wordCount = async (filePath) => {
  try {
    const fileData = statSync(filePath);
    const fileReadStream = createReadStream(filePath);
    const asyncPipeline = promisify(pipeline);
    const totalProgress = 60;
    let wordCount = 0;
    let countChunkSize = 0;

    const countChunkWord = new Transform({
      transform(chunk, encoding, callback) {
        const chunkString = String(chunk);
        const mappedString = chunkString
          .replace(/[\n\r\'\’\-]/g, " ")
          .split(" ")
          .filter((word) => !!word);
        wordCount += mappedString.length;

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

    console.time("time");

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
    console.log("Word Count:", wordCount);
    console.timeEnd("time");
  } catch (error) {
    console.log(error.message);
  }
};
