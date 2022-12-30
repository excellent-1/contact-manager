import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import Modules from /Shared folder
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';


import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(M => M.DemoModule) },
  { path: '**', redirectTo: 'demo' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
