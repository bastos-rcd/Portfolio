import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Input()
  public i18n: any = {};

  @Output()
  public buttonClicked = new EventEmitter<void>();

  constructor() { }

  public onButtonClick() {
    this.buttonClicked.emit();
  }
}