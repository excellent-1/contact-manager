import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  
  @Output() toggleSidenav: EventEmitter<void> = new EventEmitter<void>(); // function call
  
  constructor(private dialog: MatDialog) {}

  ngOnInit() {

  }

  openAddNewContactDialog() {
    const matDialogConfig: MatDialogConfig = {
      width: '450px'
    };
    let dialogRef = this.dialog.open(NewContactDialogComponent, matDialogConfig) // ng generate component contactmanager/components/new-contact-dialog --no-test --dry-run
    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed', result);
    })
    
  }
}
