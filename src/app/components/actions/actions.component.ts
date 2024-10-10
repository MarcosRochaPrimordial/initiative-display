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

  rollDices() {
    this.playerService.rollDices();
  }
}
