import { Injectable, signal, WritableSignal } from '@angular/core';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: WritableSignal<Array<Player>> = signal([]);
  rollModeOn = signal(false);
  deleteModeOn = signal(false);

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
  }

  putPlayerOnRound(index: number) {
    this.players().forEach(player => player.onRound = false);
    this.players().at(index)!.onRound = true;
  }

  selectPlayer(index: number) {
    this.players().forEach((player, indexPlayer) => {
      if (indexPlayer !== index) {
        return;
      }

      player.selected = !player.selected;
    });
  }

  removeSelectedPlayers() {
    this.players.update(players => players.filter(player => !player.selected));
    this.players.update(players => {
      if (!!players[0]) {
        players[0].onRound = true;
      }

      return players;
    });
  }

  private applyInitiative(player: Player) {
    return {
      ...player,
      initiative: this.runRandomDice(),
    };
  }

  private runRandomDice() {
    return Math.floor((Math.random() * 20) + 1);
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
