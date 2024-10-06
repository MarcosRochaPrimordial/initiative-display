import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-add-player',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatIconModule, MatButtonModule],
  templateUrl: './add-player.component.html',
})
export class AddPlayerComponent {
  player = signal('');
  playerService = inject(PlayerService);

  addPlayer() {
    if (this.player() === '') return false;
    
    this.playerService
      .players
      .update(playerList => {
        playerList.push({ name: this.player(), onRound: this.playerService.players().length === 0 });
        return playerList;
      });
    
    this.player.set('');
  }

  onKeyUp(pressedKeyCode: number) {
    if (pressedKeyCode === 13) {
      this.addPlayer();
    }
  }
}
