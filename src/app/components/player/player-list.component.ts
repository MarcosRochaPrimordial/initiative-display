import { Component, inject, signal } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [MatDividerModule, MatIconModule, DragDropModule],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent {
  playerService = inject(PlayerService);
  playerOnRound = signal('');

  playerList = this.playerService.players();

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.playerList, event.previousIndex, event.currentIndex);
  }
}
