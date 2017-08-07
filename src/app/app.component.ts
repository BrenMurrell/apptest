import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router:Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.isHome(event.url) ? this.isNav = false : this.isNav = true;
        window.scroll(0,0);
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }
  title = 'Bren Murrell';
  subtitle = 'Front End Developer';
  isNav = false;
  getNav() {
    return this.isNav;
  }
  makeNav() {
    //this.isNav = !this.isNav;
  }
  isHome(url) {
    if(url === '/home' || url === '/') return true;
  }
}
