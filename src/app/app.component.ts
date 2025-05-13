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

  URLSoftShell: [string, string][] = [
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/id4d2f54738312e07/version/1742365278/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/iddb1bee841bd3645/version/1727506261/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i905903e93db72608/version/1741674999/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i254d6489e9f1006f/version/1741674999/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/icb84a24cbb695b43/version/1741674999/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i1f731c614db29f29/version/1741674999/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i64cd10887771a7d6/version/1741674999/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i43acd960620eb922/version/1741675021/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i4201d1447f638724/version/1741675021/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i2e25e0a40df215b1/version/1741675021/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i9c9b5f76f29aa50c/version/1741675021/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i063018a905308263/version/1741675021/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/if11bb4cd96348f3a/version/1741675021/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i32a9fb5e0cddf68a/version/1741675021/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i28e236dd4d2788a6/version/1741675021/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i45f09f6d32541e0a/version/1741675021/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i9bdfafd78024f008/version/1741675021/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i8b7c459beb43b329/version/1741675021/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/idf0dc5ca3199459d/version/1741675011/image.jpg',
    'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sdd37b24955066016/image/i4a446fc0056b1cb7/version/1742365278/image.jpg',
  ].map((url) => [url, '']);

  private colorCodes = [
    ['rgb(216,255,0)', 'Neon Gelb'],
    ['rgb(229,233,139)', 'Zitronengelb'],
    ['rgb(232,184,33)', 'Gelb'],
    ['rgb(255,70,14)', 'Neon Orange'],
    ['rgb(222,74,41)', 'Orange'],
    ['rgb(228,25,53)', 'Rot'],
    ['rgb(126,40,59)', 'Bordeaux'],
    ['rgb(139,150,161)', 'Lachs'],
    ['rgb(226,175,214)', 'Rosa'],
    ['rgb(255,128,220)', 'Leuchtpink'],
    ['rgb(204,45,130)', 'Pink'],
    ['rgb(176,161,229)', 'Flieder'],
    ['rgb(104,62,166)', 'Violet'],
    ['rgb(73,42,112)', 'Lila'],
    ['rgb(160,213,243)', 'Himmelblau'],
    ['rgb(130,159,216)', 'Hellblau'],
    ['rgb(0,113,222)', 'Blau'],
    ['rgb(39,54,207)', 'Königsblau'],
    ['rgb(41,44,87)', 'Dunkelblau'],
    ['rgb(72,208,235)', 'Türkis'],
    ['rgb(62,168,214)', 'Aquamarin'],
    ['rgb(0,106,141)', 'Petrol'],
    ['rgb(143,204,67)', 'Limone'],
    ['rgb(166,236,151)', 'Pistacho'],
    ['rgb(47,214,139)', 'Hellgrün'],
    ['rgb(55,235,230)', 'Minze'],
    ['rgb(8,90,81)', 'Tannengrün'],
    ['rgb(88,86,62)', 'Khaki'],
    ['rgb(208,203,192)', 'Creme'],
    ['rgb(191,181,165)', 'Beige'],
    ['rgb(162,144,116)', 'Sandgold'],
    ['rgb(199,129,87)', 'Caramel'],
    ['rgb(153,120,110)', 'Hellbraun'],
    ['rgb(86,57,49)', 'Braun'],
    ['rgb(189,192,199)', 'Silber'],
    ['rgb(167,186,204)', 'Silbergrau'],
    ['rgb(0,0,0)', 'Schwarz'],
  ];

  URLGurtband: [string, string][] = this.colorCodes.map((color) => [
    `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="200" width="200"><rect x="0" width="200" height="200" fill="${color[0]}"/></svg>`,
    color[1],
  ]);

  config = {
    imageLink: '',
    imageLink2: '',
  };
}
