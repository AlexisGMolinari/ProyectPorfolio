// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'portafolio';
  sidebarOpen = false;
  pageTitle: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.routerState.root.snapshot;
        this.pageTitle = this.getTitle(currentRoute);
      });
  }

  getTitle(routeSnapshot: any): string {
    let title = routeSnapshot.data && routeSnapshot.data.title ? routeSnapshot.data.title : '';
    if (routeSnapshot.firstChild) {
      title = this.getTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }
  
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}