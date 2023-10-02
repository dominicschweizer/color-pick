import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-svg-display',
  templateUrl: './svg-display.component.html',
  styleUrls: ['./svg-display.component.css'],
})
export class SvgDisplayComponent {
  @Input() svgConfig: { imageLink: string; imageLink2: string } | undefined;
}
