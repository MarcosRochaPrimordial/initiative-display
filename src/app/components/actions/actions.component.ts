import { Component, inject } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { CommonModule } from '@angular/common';
import { TextButtonComponent } from '../text-button/text-button.component';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [TextButtonComponent, CommonModule],
  templateUrl: './actions.component.html',
})
export class ActionsComponent {

  playerService = inject(PlayerService);

  rollDices() {
    this.playerService.rollDices();
  }

  removeSelectedPlayers() {
    this.playerService.removeSelectedPlayers();
    this.playerService.turnDeleteMode();
  }

  nextPlayer() {
    this.playerService.nextPlayer();
  }
}
