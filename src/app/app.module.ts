import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './layouts/about/about.component';
import { SkillsComponent } from './layouts/skills/skills.component';
import { MyservicesComponent } from './layouts/myservices/myservices.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CircularProgressBarComponent } from './components/circular-progress-bar/circular-progress-bar.component';
import { ProjectsComponent } from './layouts/projects/projects.component';
import { ContactmeComponent } from './layouts/contactme/contactme.component';
import { ProjectsGalleryComponent } from './views/projects-gallery/projects-gallery.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    MyservicesComponent,
    ProgressBarComponent,
    CircularProgressBarComponent,
    ProjectsComponent,
    ContactmeComponent,
    ProjectsGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent


  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
