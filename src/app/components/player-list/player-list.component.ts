import { Component, inject } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { PlayerItemComponent } from '../player-item/player-item.component';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [DragDropModule, PlayerItemComponent],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent {
  playerService = inject(PlayerService);

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.playerService.players(), event.previousIndex, event.currentIndex);
  }
}
