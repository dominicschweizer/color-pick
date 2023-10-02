import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  changeCircle(image: string) {
    console.log(image);
    this.config.imageLink = image;
  }

  changeRect(image: string) {
    console.log(image);
    this.config.imageLink2 = image;
  }

  URLSamplesCircle = [
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i254d6489e9f1006f/version/1672902072/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/id5e5dfb6967b403d/version/1677503077/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i9c9b5f76f29aa50c/version/1677503077/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i70eaf0f2093b3e12/version/1677503077/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i94bd9e3d0f5efa9f/version/1677503077/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i8bba466ac996b2ae/version/1657199620/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i05969cbfaacf84b6/version/1651990073/image.jpg',
  ];

  URLSamplesRect = [
    'https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwY29sb3VyfGVufDB8fDB8fHww&w=1000&q=80',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC',
  ];

  config = {
    imageLink: '',
    imageLink2: '',
  };
}
