import {Component, OnDestroy, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  paramsSubscription: Subscription;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.paramsSubscription = this.router.events.subscribe (event => { if ( event instanceof NavigationEnd) {
      event.url === '/weather' ? this.isAuthenticated = true : this.isAuthenticated = false;
    }
    });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
