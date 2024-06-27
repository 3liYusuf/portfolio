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
      title: 'Software Engineer & Tester',
      from: '07/23',
      to: '03/24',
      at: 'Ahlan Technologies W.L.L',
    },
    {
      title: 'Software Engineer (Ionic)',
      from: '03/24',
      to: '05/24',
      at: 'RemoteApps',
    },
    {
      title: 'Software Engineer',
      from: '05/24',
      at: 'Madar Training Center',
    },
  ];
  contactForm: FormGroup;
  confirmation: boolean = false;
  projects = [
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
    { image: 'assets/BookMYBook.png', url: '/BookMYBook' },
    {
      image: 'assets/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
    },
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
