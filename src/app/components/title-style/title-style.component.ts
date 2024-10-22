import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-style',
  templateUrl: './title-style.component.html',
  styleUrl: './title-style.component.scss',
})
export class TitleStyleComponent {
  @Input() title!: string;
  @Input() link = 'assets/lines/3_lines_top_right_green.png';
  constructor() {}
}
