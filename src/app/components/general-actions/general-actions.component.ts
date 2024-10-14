import { Component, inject } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-general-actions',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './general-actions.component.html',
})
export class GeneralActionsComponent {
  playerService = inject(PlayerService);

  turnDeleteMode() {
    this.playerService.deleteModeOn.update(deleteModeOn => !deleteModeOn);
  }

  removeSelectedPlayers() {
    this.playerService.removeSelectedPlayers();
  }
}
