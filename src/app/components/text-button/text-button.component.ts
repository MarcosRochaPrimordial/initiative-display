import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-text-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './text-button.component.html',
})
export class TextButtonComponent {
  @Input() buttonType: 'stroked' | 'flat';
  @Input("hidden") hiddenAttr: boolean;
  @Input("class") buttonClasses: string;
  @Input("color") buttonColor: 'primary' | 'secondary';
  @Input("text") buttonText: string;
  @Output() clickFunction = new EventEmitter();

  onClick($event: any) {
    this.clickFunction.emit($event);
  }
}
