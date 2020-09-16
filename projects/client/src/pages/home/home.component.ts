import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ServiceCard {
  img: SafeHtml | string;
  text: string;
  route: { path: [string, any?]; label: string };
}

@Component({
  selector: 'rx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: ServiceCard[];
  constructor(private readonly sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.cards = [
      {
        img: 'https://fakeimg.pl/440x230/282828/eae0d0/?retina=1&text=Angel',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        route: {
          label: 'design',
          path: ['/services', 'design'],
        },
      },
      {
        img: 'https://fakeimg.pl/440x230/282828/eae0d0/?retina=1&text=Angel',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        route: {
          label: 'website',
          path: ['/services', 'website'],
        },
      },
      {
        img: 'https://fakeimg.pl/440x230/282828/eae0d0/?retina=1&text=Angel',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        route: {
          label: 'application',
          path: ['/services', 'application'],
        },
      },
    ];
  }
}
