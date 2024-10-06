import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './actions.component.html',
})
export class ActionsComponent {

  playerService = inject(PlayerService);

  private players = this.playerService.players();

  nextSubject() {
    this.players
      .every((player, index) => {
        if (!player.onRound) return true;

        if (!this.players[(index + 1)]) {
          player.onRound = false;
          this.players[0].onRound = true;
          return false;
        }

        player.onRound = false;
        this.players[(index + 1)].onRound = true;
        return false;
      });
  }
}
