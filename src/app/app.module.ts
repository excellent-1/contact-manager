import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'contactmanager', loadChildren: () => import('./contactmanager/contactmanager.module').then(M => M.ContactmanagerModule) },
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(M => M.DemoModule) },
  { path: '**', redirectTo: 'contactmanager' }
  //{ path: '**', redirectTo: 'demo' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
