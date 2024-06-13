import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntersectionObserverDirective } from './directives/intersection-observer.directive';
import { TitleStyleComponent } from './components/title-style/title-style.component';
import { AdvBoxComponent } from './components/adv-box/adv-box.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesBoxesComponent } from './components/services-boxes/services-boxes.component';

@NgModule({
  declarations: [
    AppComponent,
    IntersectionObserverDirective,
    TitleStyleComponent,
    AdvBoxComponent,
    ServicesBoxesComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
