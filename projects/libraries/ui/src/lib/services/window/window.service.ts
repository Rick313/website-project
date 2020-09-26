import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Breakpoint {
  [key: string]: number;
}
const defaultBreakpoints = { small: 768, medium: 992, large: 1200 };

@Injectable({ providedIn: 'root' })
export class WindowService {
  constructor() {}

  breakpoint(breakpoints: Breakpoint = defaultBreakpoints) {
    return this.size().pipe(
      map(({ width }) => {
        for (const [name, value] of Object.entries(breakpoints)) {
          if (width < value) {
            return name;
          }
        }
      })
    );
  }

  orientation(): Observable<ScreenOrientation> {
    const observable = new Observable<ScreenOrientation>((subscribe) => {
      subscribe.next(window.screen.orientation);
      window.addEventListener(
        'orientationchange',
        () => {
          subscribe.next(window.screen.orientation);
        },
        false
      );
    });
    return observable;
  }

  size(): Observable<{ height: number; width: number }> {
    const observable = new Observable<{ height: number; width: number }>(
      (subscribe) => {
        subscribe.next({
          height: window.screen.height,
          width: window.screen.width,
        });
        window.addEventListener(
          'resize',
          () => {
            subscribe.next({
              height: window.screen.height,
              width: window.screen.width,
            });
          },
          false
        );
      }
    );
    return observable;
  }
}
