import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  contactForm: FormGroup;
  confirmation: boolean = false;
  projects = [
    { image: 'assets/BookMYBook.png' },
    { image: 'assets/list_bullet.png' },
    { image: 'assets/list_bullet.png' },
    { image: 'assets/list_bullet.png' },
    { image: 'assets/list_bullet.png' },
    { image: 'assets/list_bullet.png' },
    { image: 'assets/list_bullet.png' },
    { image: 'assets/list_bullet.png' },
    { image: 'assets/list_bullet.png' },
    { image: 'assets/list_bullet.png' },
    { image: 'assets/list_bullet.png' },
    { image: 'assets/list_bullet.png' },
    { image: 'assets/list_bullet.png' },
  ];
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      letter: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.http
        .post('https://formspree.io/f/mblrryry', formData, {
          headers: { Accept: 'application/json' },
        })
        .subscribe({
          next: (response) => {
            this.contactForm.reset();
            this.confirmation = true;
          },
          error: (error) => {
            alert('Oops! There was a problem submitting your form');
          },
        });
    }
  }
}
