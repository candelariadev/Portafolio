import {
  Component,
  ElementRef,
  Renderer2,
  signal,
  viewChild
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // Dependencias modernas con inject()
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);
  private doc = inject(DOCUMENT);

  // Signals para estado reactivo
  scrolled = signal(false);
  activeSection = signal<string>('');
  menuOpen = signal(false);

  // ViewChild para referencia al navbar
  navbar = viewChild('navbarRef');

  sectionObserver!: IntersectionObserver;

  constructor() {
    if (this.isBrowser()) {
      this.initializeScrollListener();
      this.initializeSectionObserver();
    }
  }

  // ================================
  // DETECTAR SCROLL EN NAVBAR
  // ================================
  private initializeScrollListener() {
    this.doc.defaultView?.addEventListener('scroll', () => {
      const y = this.doc.defaultView?.scrollY ?? 0;
      this.scrolled.set(y > 50);
    });
  }

  // ================================
  // OBSERVAR SECCIONES VISIBLES
  // ================================
  private initializeSectionObserver() {
    const options = { threshold: 0.5 }; // 50% visible

    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    const sections = this.doc.querySelectorAll('section[id], div[id]');
    sections.forEach((sec) => this.sectionObserver.observe(sec));
  }

  // ================================
  // SCROLL SUAVE HACIA SECCIÓN
  // ================================
  scrollTo(event: Event, sectionId: string) {
    event.preventDefault();
    if (!this.isBrowser()) return;

    const id = sectionId.replace('#', '');
    const section = this.doc.getElementById(id);

    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.menuOpen.set(false);
  }

  // ================================
  // CONTROL DEL MENÚ MÓVIL
  // ================================
  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  // ================================
  // SSR SAFE CHECK
  // ================================
  private isBrowser() {
    return typeof window !== 'undefined';
  }
}
