import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: WritableSignal<Array<string>> = signal([]);

}
