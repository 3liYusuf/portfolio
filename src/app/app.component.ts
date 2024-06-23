import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  experiences = [
    {
      title: 'Software Engineer',
      from: 'from',
      to: 'to',
      at: 'at',
      description: 'description',
    },
    {
      title: 'DevOps',
      from: 'from',
      to: 'to',
      at: 'at',
      description: 'description',
    },
    {
      title: 'Full-Stack Developer',
      from: 'from',
      to: 'to',
      at: 'at',
      description: 'description',
    },
  ];
}
