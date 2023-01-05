import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { FlexboxComponent } from './flexbox/flexbox.component';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Routes, RouterModule } from '@angular/router';

// root component <router-outlet/>
// >> Contact Manager Module /contact-manager <router-outlet/>
// >> Demo Module /demo/<component> 
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
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, FormsModule, 
    //FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule { }
