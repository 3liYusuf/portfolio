import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-boxes',
  templateUrl: './services-boxes.component.html',
  styleUrl: './services-boxes.component.scss',
})
export class ServicesBoxesComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;

  constructor() {}
}
