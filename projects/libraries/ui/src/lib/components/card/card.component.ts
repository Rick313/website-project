import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rx-card',
  template: `
    <ng-content select="[head]"></ng-content>
    <ng-content select="[body]"></ng-content>
    <ng-content select="[foot]"></ng-content>
  `,
  styles: [],
})
export class CardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
