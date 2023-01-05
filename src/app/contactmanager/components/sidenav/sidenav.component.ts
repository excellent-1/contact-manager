import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  public isScreenSmall?: boolean;
  constructor(private breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakPointObserver
      //.observe([ `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      })
    //.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
  }
}
