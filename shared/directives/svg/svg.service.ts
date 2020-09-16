import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SvgService {
  constructor(
    private readonly http: HttpClient,
    private readonly sanitizer: DomSanitizer
  ) {}

  svgFromUrl(
    url: string,
    output: 'SafeHTML' | 'String' = 'SafeHTML'
  ): Observable<SafeHtml | string> {
    return this.http.get(url, { responseType: 'arraybuffer' }).pipe(
      map((data) => {
        const decoder = new TextDecoder();
        const svg = decoder.decode(data);
        if (output === 'SafeHTML') {
          return this.sanitizer.bypassSecurityTrustHtml(svg);
        } else {
          return svg;
        }
      })
    );
  }
}
