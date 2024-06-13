import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  @Input() appIntersectionObserver: string;
  private observer: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll('.tag').forEach((link) => {
              link.classList.remove('active');
              if (
                link.getAttribute('href') === `#${this.appIntersectionObserver}`
              ) {
                link.classList.add('active');
              }
            });
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
