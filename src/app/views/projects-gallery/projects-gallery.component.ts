import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-projects-gallery',
    templateUrl: './projects-gallery.component.html',
    styleUrl: './projects-gallery.component.scss',
    standalone: false
})
export class ProjectsGalleryComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/home']); // o la ruta que quieras
  }
}
