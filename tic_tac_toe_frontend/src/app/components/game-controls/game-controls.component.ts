import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controls',
  standalone: true,
  template: `
    <div class="game-controls">
      <button class="reset-button" (click)="onReset()">Reset Game</button>
    </div>
  `,
  styles: [`
    .game-controls {
      text-align: center;
      margin: 20px 0;
    }

    .reset-button {
      padding: 12px 24px;
      font-size: 1.1rem;
      background-color: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
    }

    .reset-button:hover {
      background-color: #1565c0;
    }
  `]
})
export class GameControlsComponent {
  @Output() reset = new EventEmitter<void>();

  onReset(): void {
    this.reset.emit();
  }
}
