import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adv-box',
  templateUrl: './adv-box.component.html',
  styleUrl: './adv-box.component.scss',
})
export class AdvBoxComponent {
  @Input() percent: number = 90;
  @Input() icon!: string;
  @Input() title!: string;
}
