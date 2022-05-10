import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HtmlParser } from '@angular/compiler';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('jump', [
      transition(
        'notJumping => jumping',
        animate(
          1000,
          keyframes([
            style({
              top: '20px',
              offset: 0,
            }),
            style({
              top: '0px',
              offset: 0,
            }),
            style({
              top: '20px',
              offset: 0,
            }),
          ])
        )
      ),
    ]),
  ],
})
export class AppComponent implements OnInit {
  canvas: HTMLCanvasElement = null;
  dino: HTMLImageElement = null;
  cactus: HTMLImageElement = null;
  ctx: CanvasRenderingContext2D = null;

  stateDinoJump = 'notJumping';
  stateCactusRight = 'right';

  constructor() {
    // parte prima il constructor
  }

  ngOnInit(): void {
    // ngoninit parte dopo il constructor
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.dino = new Image(30, 30);
    this.dino.src = '../assets/img/dino.png';

    // la disegno quando carica l'immagine
    this.dino.onload = () => {
      this.ctx.drawImage(this.dino, 0, 10, 130, 130);
    };

    this.cactus = new Image(17, 30);
    this.cactus.src = '../assets/img/cactus.png';
    this.cactus.onload = () => {
      this.ctx.drawImage(this.cactus, 60, 40, 90, 160);
    };
  }

  animate() {
    this.stateDinoJump = 'jumping';
  }
}
