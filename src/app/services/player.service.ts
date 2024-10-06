import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: WritableSignal<Array<{ name: string, onRound: boolean }>> = signal([]);

}
