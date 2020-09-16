import { Component, OnInit } from '@angular/core';
import { WindowService } from '@shared/services';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

type Navigation = {
  label: string;
  path: [string, any?];
  icon: string;
  enable: boolean;
}[];

@Component({
  selector: 'rx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menu: 'open' | 'close' = 'close';
  iconmenu = './assets/icons/bars.svg';

  breakpoints$: Observable<string>;
  constructor(private readonly window: WindowService) {}
  ngOnInit() {
    this.breakpoints$ = this.window.breakpoint().pipe(
      map((data) => {
        if (data !== 'small') {
          this.menu = 'open';
        }
        return data;
      })
    );
  }

  navigation: Navigation = [
    {
      label: 'home',
      path: ['/home'],
      icon: './assets/icons/home.svg',
      enable: true,
    },
    {
      label: 'services',
      path: ['/services'],
      icon: './assets/icons/laptop-code.svg',
      enable: true,
    },
    {
      label: 'about',
      path: ['/about'],
      icon: './assets/icons/mug-hot.svg',
      enable: true,
    },
    {
      label: 'portfolio',
      path: ['/portfolio'],
      icon: './assets/icons/book.svg',
      enable: false,
    },
    {
      label: 'tutorial',
      path: ['/tutorials'],
      icon: './assets/icons/graduation-cap.svg',
      enable: false,
    },
    {
      label: 'contact',
      path: ['/contact'],
      icon: './assets/icons/envelope.svg',
      enable: true,
    },
  ];

  toggle(event: MouseEvent) {
    if (this.menu === 'close') {
      this.menu = 'open';
      return;
    }
    if (this.menu === 'open') {
      this.menu = 'close';
      return;
    }
  }
}
