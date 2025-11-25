import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-progress-bar',
  templateUrl: './circular-progress-bar.component.html',
  styleUrls: ['./circular-progress-bar.component.scss']
})
export class CircularProgressBarComponent implements OnInit {
  @Input() progress: number = 0;
  @Input() skill: string = '';
  @Input() size: number = 120;
  @Input() strokeWidth: number = 3;
  @Input() color: string = '#3F51B5';

  radius: number = 16;
  circumference: number = 2 * Math.PI * 16;
  offset: number = 0;

  ngOnInit(): void {
    this.animateProgress();
  }

  private animateProgress(): void {
    // Empezar desde el estado inicial (círculo completo)
    this.offset = this.circumference;
    
    // Animar al progreso objetivo después de un pequeño delay
    setTimeout(() => {
      const progress = this.progress;
      this.offset = this.circumference - (progress / 100) * this.circumference;
    }, 100);
  }

  public restartAnimation(): void {
    this.animateProgress();
  }
}
