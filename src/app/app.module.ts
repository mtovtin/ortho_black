import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import "@ptkdev/webcomponent-instagram-widget";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdvantagesComponent } from './advantages/advantages.component';
import { BracesComponent } from './braces/braces.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RulesComponent } from './rules/rules.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdvantagesComponent,
    BracesComponent,
    GalleryComponent,
    RulesComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule, 
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
