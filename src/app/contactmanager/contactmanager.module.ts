import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { FlexboxComponent } from './flexbox/flexbox.component';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserService } from './services/user.service';

const routes: Routes = [
  { 
    path: '', component: ContactmanagerAppComponent,
    children: [
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
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ],
  declarations: [
    ContactmanagerAppComponent, ToolbarComponent,
    MainContentComponent, SidenavComponent
  ]
})
export class ContactmanagerModule { }
