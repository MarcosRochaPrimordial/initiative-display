import { Component, inject } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [MatDividerModule, MatIconModule, DragDropModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  playerService = inject(PlayerService);

  get playerList() {
    return this.playerService.players();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.playerList, event.previousIndex, event.currentIndex);
  }
}
