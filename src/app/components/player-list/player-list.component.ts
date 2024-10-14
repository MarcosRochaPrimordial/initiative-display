import { Component, inject, signal } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { BonusInitiativeInputComponent } from "../bonus-initiative-input/bonus-initiative-input.component";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [DragDropModule, BonusInitiativeInputComponent, MatMenuModule, MatButtonModule, MatIconModule, CommonModule, MatCheckboxModule, MatTooltipModule],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent {
  playerService = inject(PlayerService);

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.playerService.players(), event.previousIndex, event.currentIndex);
  }

  selectTurn(index: number) {
    this.playerService.putPlayerOnRound(index);
  }

  rollInitiative(index: number) {
    this.playerService.rollInitiative(index);
  }

  selectPlayer(index: number) {
    this.playerService.selectPlayer(index);
  }
}
