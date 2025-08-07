import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameStatusComponent } from './components/game-status/game-status.component';
import { GameControlsComponent } from './components/game-controls/game-controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GameBoardComponent, GameStatusComponent, GameControlsComponent],
  template: `
    <div class="game-container">
      <h1>Tic Tac Toe</h1>
      <app-game-status
        [currentPlayer]="gameBoard.currentPlayer"
        [gameOver]="gameBoard.gameOver"
        [winner]="gameBoard.winner"
      ></app-game-status>
      <app-game-board #gameBoard></app-game-board>
      <app-game-controls (reset)="gameBoard.resetGame()"></app-game-controls>
    </div>
  `,
  styles: [`
    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
      background-color: #ffffff;
    }

    h1 {
      color: #1976d2;
      font-size: 2.5rem;
      margin-bottom: 20px;
      font-weight: 500;
    }

    @media (max-width: 600px) {
      .game-container {
        padding: 10px;
      }

      h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class AppComponent {
  @ViewChild('gameBoard') gameBoard!: GameBoardComponent;
}
