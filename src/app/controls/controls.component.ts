import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent {
  setcolor(arg0: string) {
    this.color = arg0;
    this.eventEmitter.emit({ background: 'test', foreground: 'test2' });
  }
  color: string | undefined;
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();
}
