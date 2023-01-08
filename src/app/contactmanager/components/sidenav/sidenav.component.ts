import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = 
      matchMedia( `(max-width: ${SMALL_WIDTH_BREAKPOINT}px )`);

  public isScreenSmall?: boolean;

  users?: Observable<User[]>;

  constructor(
    //zone: NgZone, 
    private breakPointObserver: BreakpointObserver,
    private userService: UserService
  ) {
      //this.mediaMatcher.addListener(mql => 
        //zone.run(() => this.mediaMatcher = mql)
        //zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));
  }

  ngOnInit(): void {
    this.breakPointObserver
      .observe([ `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      //.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      })
    this.users = this.userService.getUsers; // supply user data for sidenav 
    this.userService.loadAll();
    
    this.userService.getUsers.subscribe(data => {
      console.log(" In the SideNav " , data)
    });
  }

}
