import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-bonus-initiative-input',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './bonus-initiative-input.component.html',
  styleUrl: './bonus-initiative-input.component.scss'
})
export class BonusInitiativeInputComponent {

  @Input() player: Player;

  incrementBonus(incrementNumber: number, player: Player) {
    player.initiativeBonus = player.initiativeBonus + incrementNumber;
  }

}
