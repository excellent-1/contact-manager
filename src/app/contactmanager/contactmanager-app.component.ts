import { Component } from '@angular/core';

@Component({
  selector: 'app-contactmanager-app',
  template: `
    <p>
    > contactmanager-app 
    >> sidenav
    >>> toolbar
    >>>> main-content
    -----------------------
      contactmanager-app works! - We are rooted to the ContactManager
      Adding app-sidenav at the root level
      Inside the sidenav I wired-up the app-toolbar and add router-outlet

      <app-sidenav></app-sidenav>
    </p>
  `,
  styles: [
  ]
})
export class ContactmanagerAppComponent {

}
