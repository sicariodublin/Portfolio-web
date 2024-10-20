import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MainAnimationComponent } from 'src/app/shared/main-animation/main-animation.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';
import { AboutMeComponent } from '../../shared/about-me/about-me.component';
import { BntPrimaryComponent } from '../../shared/bnt-primary/bnt-primary.component';
import { ContactComponent } from '../../shared/contact/contact.component'; // Import the Contact component
import { HeaderComponent } from '../../shared/header/header.component';
import { ProjectsComponent } from '../../shared/projects/projects.component';
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BntPrimaryComponent,
    MainSectionComponent,
    MainAnimationComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

