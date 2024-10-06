import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { AddPlayerComponent } from "./components/add-player/add-player.component";
import { ActionsComponent } from './components/actions/actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerListComponent, AddPlayerComponent, ActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
