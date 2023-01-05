import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, NgZone } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = 
      matchMedia( `(max-width: ${SMALL_WIDTH_BREAKPOINT}px )`);

  //public isScreenSmall?: boolean;

  constructor(zone: NgZone, private breakPointObserver: BreakpointObserver) {
    this.mediaMatcher.addListener(mql => 
      //zone.run(() => this.mediaMatcher = mql)
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`))
      );
  }

  ngOnInit(): void {
    //this.breakPointObserver
      //.observe([ `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      //.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      //.subscribe((state: BreakpointState) => {
      //  this.isScreenSmall = state.matches;
      //})
    //.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
