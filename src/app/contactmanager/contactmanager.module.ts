import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { FlexboxComponent } from './flexbox/flexbox.component';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserService } from './services/user.service';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';

const routes: Routes = [
  { 
    path: '', component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent }, // Register new root with a id to route to MainContentComponent
      { path: '', component: MainContentComponent }
    ] 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  
  imports: [
    CommonModule, HttpClientModule,
    MaterialModule, FormsModule, 
    //FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ],
  declarations: [
    ContactmanagerAppComponent, ToolbarComponent,
    MainContentComponent, SidenavComponent, NotesComponent, NewContactDialogComponent
  ]
})
export class ContactmanagerModule { }
