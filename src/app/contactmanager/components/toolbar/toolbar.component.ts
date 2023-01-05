import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() toggleSidenav: EventEmitter<void> = new EventEmitter<void>(); // function call
  constructor() {}

  ngOnInit() {

  }
}
