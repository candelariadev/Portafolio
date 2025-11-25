import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectsGalleryComponent } from './views/projects-gallery/projects-gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects-gallery', component: ProjectsGalleryComponent },
  // Ruta wildcard: redirige cualquier ruta no encontrada al home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
