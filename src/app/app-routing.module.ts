import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { BracesComponent } from './braces/braces.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RulesComponent } from './rules/rules.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: NavbarComponent},
  {path: 'advantages', component: AdvantagesComponent},
  {path: 'braces', component: BracesComponent},
  {path: 'reviews', component: GalleryComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'about', component: AboutComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
