import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-svg-display',
  templateUrl: './svg-display.component.html',
  styleUrls: ['./svg-display.component.css'],
})
export class SvgDisplayComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  color = 'red';
  color2 = 'black';
  @Input() svgConfig: any = {};
  imageLink =
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i8bba466ac996b2ae/version/1657199620/image.jpg';
  imageLink2 =
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i05969cbfaacf84b6/version/1651990073/image.jpg';
}
