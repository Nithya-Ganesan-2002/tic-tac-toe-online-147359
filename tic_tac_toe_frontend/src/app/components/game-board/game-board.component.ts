import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="game-board">
      <div class="board-row" *ngFor="let row of [0, 1, 2]">
        <button 
          class="board-cell"
          *ngFor="let col of [0, 1, 2]"
          (click)="makeMove(row * 3 + col)"
          [disabled]="board[row * 3 + col] !== null || gameOver"
        >
          {{ board[row * 3 + col] }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .game-board {
      display: grid;
      gap: 8px;
      padding: 16px;
    }

    .board-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .board-cell {
      aspect-ratio: 1;
      background-color: white;
      border: 2px solid #1976d2;
      border-radius: 8px;
      font-size: 2rem;
      font-weight: bold;
      color: #424242;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }

    .board-cell:hover:not(:disabled) {
      background-color: #e3f2fd;
    }

    .board-cell:disabled {
      cursor: not-allowed;
      opacity: 0.8;
    }
  `]
})
export class GameBoardComponent {
  board: (string | null)[] = Array(9).fill(null);
  currentPlayer: 'X' | 'O' = 'X';
  gameOver = false;
  winner: string | null = null;

  makeMove(index: number): void {
    if (this.board[index] === null && !this.gameOver) {
      this.board[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.gameOver = true;
        this.winner = this.currentPlayer;
      } else if (this.board.every(cell => cell !== null)) {
        this.gameOver = true;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  private checkWinner(): boolean {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winningCombinations.some(combination => {
      const [a, b, c] = combination;
      return (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      );
    });
  }

  resetGame(): void {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.gameOver = false;
    this.winner = null;
  }
}
