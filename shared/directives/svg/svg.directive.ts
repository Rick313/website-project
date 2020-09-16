import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { SvgService } from './svg.service';

@Directive({ selector: '[rxSvgUrl]' })
export class SvgDirective {
  @Input('rxSvgUrl') url: string;
  constructor(
    private readonly el: ElementRef,
    private readonly render: Renderer2,
    private readonly service: SvgService
  ) {}
  ngOnInit() {
    this.service.svgFromUrl(this.url, 'String').subscribe({
      error: (err) => console.error(err),
      next: (data) =>
        this.render.setProperty(this.el.nativeElement, 'innerHTML', data),
    });
  }
}
