import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  ngOnInit(): void {
    if (this.imageURLs === undefined) {
      return;
    }
    this.selectItem(...this.imageURLs[0]);
  }
  selectItem(image: string, name: string) {
    this.eventEmitter.emit([image, name]);
    this.selected = image;
  }
  color: string | undefined;
  @Output() eventEmitter: EventEmitter<[string, string]> = new EventEmitter();
  @Input() imageURLs: [string, string][] | undefined;
  selected: string | undefined;
}
