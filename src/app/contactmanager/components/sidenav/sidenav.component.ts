import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Direction, Directionality } from '@angular/cdk/bidi';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor( zone: NgZone,
    private breakPointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router
  ) {  //this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql)
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`));
  }

  private mediaMatcher: MediaQueryList = matchMedia( `(max-width: ${SMALL_WIDTH_BREAKPOINT}px )`);
  public isScreenSmall?: boolean;
  users?: Observable<User[]>;
  isDarkTheme: boolean = false;
  isDirectionRtl: Direction = 'ltr';
  @ViewChild(MatSidenav) theSideNav!: MatSidenav;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;    
  }
  toggleDirection() {
    this.isDirectionRtl = this.isDirectionRtl == 'rtl' ? 'ltr' : 'rtl';
  }
      
  ngOnInit(): void {
    try 
    {
      this.breakPointObserver
        .observe([ `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])  //.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
        .subscribe((state: BreakpointState) => {
          this.isScreenSmall = state.matches;
        })
      this.users = this.userService.getUsers; // supply user data for sidenav 
      this.userService.loadAll();
      
      this.userService.getUsers.subscribe(data => {
        console.log(" In the SideNav " , data)
      });

      this.users.subscribe(userList => {
        if(userList.length > 0) // Select the first user in the list
          this.router.navigate(['contactmanager', userList[0].id]);
      });

      this.router.events.subscribe( () => {
        if(this.isScreenSmall) { // If we are on a small screen then close the sidenav by a referance
          this.theSideNav.close(); 
          console.log('Closing side nav for Small screen')       
        } else { 
          this.theSideNav.open();
          console.log('Opening side nav for Large screen') 
        }
      });
    } catch(err) {
      console.log('Error in Sidenav: ' + err);
    }

  } // END ngOnInit()

}