import { Component, inject, signal } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { BonusInitiativeInputComponent } from "../bonus-initiative-input/bonus-initiative-input.component";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [DragDropModule, BonusInitiativeInputComponent, MatMenuModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent {
  playerService = inject(PlayerService);
  playerOnRound = signal('');

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.playerService.players(), event.previousIndex, event.currentIndex);
  }

  deleteSubject(index: number) {
    this.playerService.players().splice(index, 1);
  }

  selectTurn(index: number) {
    this.playerService.players().forEach(player => player.onRound = false);
    this.playerService.players().at(index)!.onRound = true;
  }

  rollInitiative(index: number) {
    this.playerService.rollInitiative(index);
  }
}
