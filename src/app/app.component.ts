import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { AddPlayerComponent } from "./components/add-player/add-player.component";
import { ActionsComponent } from './components/actions/actions.component';
import { GeneralActionsComponent } from './components/general-actions/general-actions.component';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerListComponent, AddPlayerComponent, ActionsComponent, GeneralActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  playerService = inject(PlayerService);
}
