import { Component, inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BonusInitiativeInputComponent } from '../bonus-initiative-input/bonus-initiative-input.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-player-item',
  standalone: true,
  imports: [DragDropModule, MatDividerModule, MatTooltipModule, MatIconModule, MatCheckboxModule, MatBottomSheetModule, MatButtonModule, BonusInitiativeInputComponent],
  templateUrl: './player-item.component.html',
  styleUrl: './player-item.component.scss'
})
export class PlayerItemComponent {

  @Input() player: Player;
  @Input() indexPlayer: number;
  @ViewChild('bottomSheetTemplate') bottomSheetTemplate: TemplateRef<any>;
  
  bottomSheetRef: MatBottomSheetRef;
  
  playerService = inject(PlayerService);
  private bottomSheet = inject(MatBottomSheet);

  selectTurn(index: number) {
    this.playerService.putPlayerOnRound(index);
  }

  openBottomSheet() {
    this.bottomSheetRef = this.bottomSheet.open(this.bottomSheetTemplate);
  }

  selectPlayer(index: number) {
    this.playerService.selectPlayer(index);
  }

  rollInitiative(index: number) {
    this.playerService.rollInitiative(index);
    this.bottomSheetRef.dismiss();
    this.bottomSheetRef = null;
  }

}
