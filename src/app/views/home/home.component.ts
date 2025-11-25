import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  options = {
    strings: ['Frontend Developer', 'Web Developer', 'Systems Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  };

  typed!: Typed;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
  ) {}



  ngAfterViewInit() {
    // Verificar si el código se está ejecutando en el navegador antes de ejecutar Typed.js
    if (isPlatformBrowser(this.platformId)) {
      this.typed = new Typed('.text', this.options);
    }
  }


}
