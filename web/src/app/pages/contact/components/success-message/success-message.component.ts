import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IContactData } from '../../interfaces/contact-data.interface';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss'],
})
export class SuccessMessageComponent {
  @Input() data?: IContactData;
  @Output() closeEvent = new EventEmitter();

  close() {
    this.closeEvent.emit();
  }
}
