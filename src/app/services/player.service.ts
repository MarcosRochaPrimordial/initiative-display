import { Injectable, signal, WritableSignal } from '@angular/core';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: WritableSignal<Array<Player>> = signal([]);
  rollModeOn = signal(false);

  rollDices() {
    this.players.update(players =>
      players
        .map(this.applyInitiative.bind(this))
        .sort(this.sortPerInitiative.bind(this))
    );
  }

  rollInitiative(index: number) {
    this.players.update(players =>
      players
        .map((player, playerIndex) => {
          if (playerIndex !== index) return player;

          return this.applyInitiative(player);
        })
        .sort(this.sortPerInitiative));

    console.log(this.players());
  }

  private applyInitiative(player: Player) {
    return {
      ...player,
      initiative: Math.floor((Math.random() * 20)),
    };
  }

  private sortPerInitiative(playerOne: Player, playerTwo: Player) {
    const playerOneInitiative = playerOne.initiative + playerOne.initiativeBonus;
    const playerTwoInitiative = playerTwo.initiative + playerTwo.initiativeBonus;

    if (playerOneInitiative > playerTwoInitiative) {
      return -1;
    } else if (playerOneInitiative < playerTwoInitiative) {
      return 1;
    }

    return 0;
  }
}
