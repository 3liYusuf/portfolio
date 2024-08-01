import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('sectionAnimate', [
      state(
        'hidden',
        style({
          transform: 'translateX(-100px)',
          opacity: 0,
        })
      ),
      state(
        'shown',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition('hidden=>shown', animate(400)),
    ]),
  ],
})
export class AppComponent implements OnInit {
  sectionStates: { [key: string]: string } = {
    home: 'hidden',
    experience: 'hidden',
    skills: 'hidden',
    services: 'hidden',
    projects: 'hidden',
    footer: 'hidden',
  };
  state = 'hidden';
  link = 'assets/lines/3_lines_top_right_green.png';
  title = 'portfolio';
  experiences = [
    {
      title: 'Software Engineer',
      from: '05/24',
      at: 'Madar Training Center',
    },
    {
      title: 'Software Engineer (Ionic)',
      from: '03/24',
      to: '05/24',
      at: 'RemoteApps',
    },
    {
      title: 'Software Engineer & Tester',
      from: '07/23',
      to: '03/24',
      at: 'Ahlan Technologies W.L.L',
    },
  ];
  contactForm: FormGroup;
  confirmation: boolean = false;
  // BookMYBook
  // Ahlan Portal
  // Car Showroom App
  // POS App
  // Cinema
  // Pharmacy
  projects = [
    {
      image: 'assets/projects/BookMYBook.png',
      url: '/BookMYBook',
      name: 'BookMYBook',
      year: '2024',
    },
    {
      image: 'assets/projects/Ahlan_Portal.png',
      url: 'https://ahlan-portal.web.app/sign-in?redirectURL=%2Fusers',
      name: 'Ahlan Portal',
      year: '2024',
    },
    {
      image: 'assets/projects/Secrets.png',
      url: 'https://secrets.3liyusuf.com',
      name: 'Secrets',
      year: '2023',
    },
  ];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private renderer: Renderer2
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      letter: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.observeSections();
  }

  observeSections() {
    const sections = Object.keys(this.sectionStates);
    const observerOptions = {
      root: null,
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          this.sectionStates[sectionId] = 'shown'; // Trigger the animation
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
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
  animateState() {
    this.state = 'shown';
  }
  changeTheme(theme: string): void {
    const htmlElement = document.documentElement;
    this.renderer.removeClass(htmlElement, 'green-theme');
    this.renderer.removeClass(htmlElement, 'blue-theme');
    this.renderer.removeClass(htmlElement, 'purple-theme');

    if (theme === 'green') {
      this.renderer.addClass(htmlElement, 'green-theme');
      this.link = 'assets/lines/3_lines_top_right_green.png';
    } else if (theme === 'blue') {
      this.renderer.addClass(htmlElement, 'blue-theme');
      this.link = 'assets/lines/3_lines_top_right_blue.png';
    } else if (theme === 'purple') {
      this.renderer.addClass(htmlElement, 'purple-theme');
      this.link = 'assets/lines/3_lines_top_right_purple.png';
    }
  }
}
