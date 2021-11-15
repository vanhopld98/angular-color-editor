import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  red;
  blue;
  green;

  constructor() {
  }

  ngOnInit() {
  }

  changeColor() {
    return 'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')';
  }
}
