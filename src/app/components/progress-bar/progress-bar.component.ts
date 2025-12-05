import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
    standalone: false
})
export class ProgressBarComponent implements OnInit {
  @Input() skill: string = '';
  @Input() progress: number = 0;
  @Input() color: string = '#FF4081';
  @Input() backgroundColor: string = 'rgba(255, 255, 255, 0.1)';
  
  progressWidth: number = 0;

  ngOnInit() {
    this.startAnimation();
  }

  private startAnimation() {
    // Reiniciar a 0 primero
    this.progressWidth = 0;
    // Luego animar al valor objetivo
    setTimeout(() => {
      this.progressWidth = this.progress;
    }, 100);
  }

  public restartAnimation() {
    this.startAnimation();
  }
}



