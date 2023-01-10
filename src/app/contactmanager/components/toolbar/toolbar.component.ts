import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  
  @Output() toggleSidenav: EventEmitter<void> = new EventEmitter<void>(); // function call
  
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar,
      private router: Router) {}

  ngOnInit() {

  }

  openAddNewContactDialog() {
    const matDialogConfig: MatDialogConfig = {
      width: '450px'
    };
    let dialogRef = this.dialog.open(NewContactDialogComponent, matDialogConfig) // ng generate component contactmanager/components/new-contact-dialog --no-test --dry-run
    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed', result);
      if(result) { 
        this.openSnackBar("Contact added", "Navigate")
          .onAction().subscribe( () => {
            // navigate to our contact that was just added
            this.router.navigate(['/contactmanager', result.id]);
          })}
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000
    });
  }

}
