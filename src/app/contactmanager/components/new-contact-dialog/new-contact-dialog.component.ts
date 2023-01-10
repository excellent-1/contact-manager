import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  avatars = ['svg-1','svg-2','svg-3','svg-4','svg-5', 'svg-6','svg-8','svg-9'
    ,'svg-12','svg-13','svg-14'];
  user: User = new User();

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>)
  {}

  name = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  ngOnInit(): void { this.user = new User();  }

  saveNewContact() {  
    this.user.name = this.name.value ?? "";
    this.dialogRef.close(this.user);  } // TODO if form is invalid don't close the dialogRef

  dismiss() { this.dialogRef.close(null);  }

}