import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public pickedColor: string = '';
  public pickedSoftshell: string = '';

  changeCircle(image: [string, string]) {
    console.log(image);
    this.config.imageLink = image[0];
    this.pickedSoftshell = image[1];
  }

  changeRect(image: [string, string]) {
    console.log(image);
    this.config.imageLink2 = image[0];
    this.pickedColor = image[1];
  }
  colors2: [string, string][] = ['christmas-2', 'christmas', 'clouds', 'knots', "knots2","knots3","knots4",  'mosaik', 'mosaik2', 'snowflakes', 'stars'].map(s => [`/assets/colors2/${s}.PNG`, s])
  URLSoftShell: [string, string][] = [
    ...this.colors2,
    
  ];
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
