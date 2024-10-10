import { Component, inject } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  playerService = inject(PlayerService);
}
