import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

type Navigation = {
  label: string;
  path: [string, any?];
  icon: SafeHtml | string;
}[];

@Component({
  selector: 'rx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly sanitize: DomSanitizer) {}
  navigation: Navigation = [
    { label: 'home', path: ['/'], icon: '' },
    { label: 'services', path: ['/services'], icon: '' },
    { label: 'about', path: ['/about'], icon: '' },
    { label: 'portfolio', path: ['/portfolio'], icon: '' },
    { label: 'tutorial', path: ['/tutorials'], icon: '' },
    { label: 'contact', path: ['/contact'], icon: '' },
  ];
}
