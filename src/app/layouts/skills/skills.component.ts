import { Component, ElementRef, OnDestroy, OnInit, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { CircularProgressBarComponent } from '../../components/circular-progress-bar/circular-progress-bar.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  @ViewChildren(ProgressBarComponent) progressBars!: QueryList<ProgressBarComponent>;
  @ViewChildren(CircularProgressBarComponent) circularBars!: QueryList<CircularProgressBarComponent>;

  private observer?: IntersectionObserver;

  radialSkills = [
    { name: 'Creativity', progress: 90, color: '#FF6B6B', size: 150, strokeWidth: 6 },
    { name: 'Communication', progress: 85, color: '#4ECDC4', size: 150, strokeWidth: 6 },
    { name: 'Adaptability', progress: 95, color: '#45B7D1', size: 150, strokeWidth: 6 },
    { name: 'Teamwork', progress: 80, color: '#96CEB4', size: 150, strokeWidth: 6 },
    { name: 'Problem Solving', progress: 75, color: '#FFEAA7', size: 150, strokeWidth: 6 },
  ];

  barSkills = [
    {
      name: 'HTML',
      progress: 90,
      color: '#E74C3C',
      backgroundColor: 'rgba(231, 76, 60, 0.15)'
    },
    {
      name: 'CSS',
      progress: 85,
      color: '#3498DB',
      backgroundColor: 'rgba(52, 152, 219, 0.15)'
    },
    {
      name: 'JavaScript',
      progress: 80,
      color: '#F1C40F',
      backgroundColor: 'rgba(241, 196, 15, 0.15)'
    },
    {
      name: 'Angular',
      progress: 75,
      color: '#E91E63',
      backgroundColor: 'rgba(233, 30, 99, 0.15)'
    },
    {
      name: 'React',
      progress: 70,
      color: '#C3E8C4',
      backgroundColor: 'rgba(233, 30, 99, 0.15)'
    },
    {
      name: 'TypeScript',
      progress: 70,
      color: '#9B59B6',
      backgroundColor: 'rgba(155, 89, 182, 0.15)'
    },
  ];

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Solo configurar IntersectionObserver en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    // Verificar que estamos en el navegador y que IntersectionObserver está disponible
    if (isPlatformBrowser(this.platformId) && typeof IntersectionObserver !== 'undefined') {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // El usuario entró a la sección skills
              this.restartAnimations();
            }
          });
        },
        {
          threshold: 0.3, // Se activa cuando el 30% del elemento es visible
          rootMargin: '0px 0px -10% 0px' // Margen para activar un poco antes
        }
      );

      // Observar el elemento ski
      this.observer.observe(this.elementRef.nativeElement);
    }
  }

  private restartAnimations() {
    // Reiniciar animaciones de barras de progreso
    if (this.progressBars) {
      this.progressBars.forEach(bar => {
        bar.restartAnimation();
      });
    }

    // Reiniciar animaciones de barras circulares
    if (this.circularBars) {
      this.circularBars.forEach(bar => {
        bar.restartAnimation();
      });
    }
  }
}
