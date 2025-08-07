import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-status',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="game-status">
      <ng-container *ngIf="!gameOver">
        <p>Current Player: <span class="current-player">{{ currentPlayer }}</span></p>
      </ng-container>
      <ng-container *ngIf="gameOver">
        <p *ngIf="winner">
          Player <span class="winner">{{ winner }}</span> wins!
        </p>
        <p *ngIf="!winner">Game Draw!</p>
      </ng-container>
    </div>
  `,
  styles: [`
    .game-status {
      text-align: center;
      margin: 20px 0;
      font-size: 1.5rem;
      color: #424242;
    }

    .current-player {
      color: #1976d2;
      font-weight: bold;
    }

    .winner {
      color: #ff9800;
      font-weight: bold;
    }
  `]
})
export class GameStatusComponent {
  @Input() currentPlayer: string = 'X';
  @Input() gameOver: boolean = false;
  @Input() winner: string | null = null;
}
