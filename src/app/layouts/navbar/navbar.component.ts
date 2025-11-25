import { Component, HostListener, OnInit, Renderer2, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // Detecta el scroll y actualiza las clases activas
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Solo ejecutar en el navegador
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Efecto de scroll en el navbar
    const navbar = this.el.nativeElement.querySelector('.navbar-container');
    if (typeof window !== 'undefined' && window.scrollY > 50) {
      this.renderer.addClass(navbar, 'scrolled');
    } else {
      this.renderer.removeClass(navbar, 'scrolled');
    }

    // Buscar secciones en todo el documento, no solo en el elemento navbar
    const sections = document.querySelectorAll('#home, #about, #services, #skills, #projects, #contact');
    const navLinks = this.el.nativeElement.querySelectorAll('ul li a');

    let currentSectionId = '';
    let maxVisibleArea = 0;

    sections.forEach((section: Element) => {
      const htmlSection = section as HTMLElement;
      const rect = htmlSection.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const viewportHeight = window.innerHeight;

      // Calcular qué tanto de la sección es visible
      const visibleTop = Math.max(0, -sectionTop);
      const visibleBottom = Math.min(viewportHeight, sectionBottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      // Si una parte significativa de la sección es visible
      if (visibleHeight > 100 && visibleHeight > maxVisibleArea) {
        maxVisibleArea = visibleHeight;
        currentSectionId = htmlSection.id;
      }

      // Si estamos cerca del top de la sección, también la consideramos activa
      if (sectionTop <= 100 && sectionTop >= -100) {
        currentSectionId = htmlSection.id;
      }
    });

    // Actualizar clases activas
    navLinks.forEach((link: HTMLElement) => {
      this.renderer.removeClass(link, 'active');
      const href = link.getAttribute('href');
      if (href && currentSectionId && href === `#${currentSectionId}`) {
        this.renderer.addClass(link, 'active');
      }
    });
  }

  // Función para hacer scroll suave al hacer clic en un enlace
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    
    // Solo ejecutar en el navegador
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const section = document.querySelector(sectionId);
    if (section && typeof window !== 'undefined') {
      const navbarHeight = 70; // Altura del navbar fijo
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Cerrar menú móvil si está abierto
    this.closeMenu();
  }

  // Alterna el menú móvil
  toggleMenu() {
    const nav = this.el.nativeElement.querySelector('ul');
    const menuToggle = this.el.nativeElement.querySelector('.menu-toggle');
    
    if (nav && menuToggle) {
      if (nav.classList.contains('active')) {
        this.renderer.removeClass(nav, 'active');
        this.renderer.removeClass(menuToggle, 'active');
      } else {
        this.renderer.addClass(nav, 'active');
        this.renderer.addClass(menuToggle, 'active');
      }
    }
  }

  // Cerrar menú móvil
  closeMenu() {
    const nav = this.el.nativeElement.querySelector('ul');
    const menuToggle = this.el.nativeElement.querySelector('.menu-toggle');
    
    if (nav && nav.classList.contains('active')) {
      this.renderer.removeClass(nav, 'active');
      this.renderer.removeClass(menuToggle, 'active');
    }
  }

  ngOnInit() {
    // Solo ejecutar en el navegador
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const menuToggle = this.el.nativeElement.querySelector('#menu-toggle');
    if (menuToggle) {
      this.renderer.listen(menuToggle, 'click', () => {
        this.toggleMenu();
      });
    }

    // Agregar event listeners a los enlaces del navbar
    const navLinks = this.el.nativeElement.querySelectorAll('ul li a');
    navLinks.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'click', (event: Event) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          this.scrollToSection(event, href);
        }
      });
    });

    // Ejecutar detección inicial
    setTimeout(() => {
      this.onWindowScroll();
    }, 100);
  }
}
