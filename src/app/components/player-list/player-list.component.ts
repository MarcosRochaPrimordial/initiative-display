import { Component, inject } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { PlayerItemComponent } from '../player-item/player-item.component';
import { MatButtonModule } from '@angular/material/button';
import { StandaloneService } from '../../services/standalone.service';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [DragDropModule, PlayerItemComponent, MatButtonModule],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent {
  playerService = inject(PlayerService);
  standaloneMode = inject(StandaloneService);

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.playerService.players(), event.previousIndex, event.currentIndex);
  }
}
