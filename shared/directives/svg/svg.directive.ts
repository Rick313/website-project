import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewContainerRef,
} from "@angular/core";
import { SvgService } from "./svg.service";

@Directive({ selector: "[rx-insert-svg]" })
export class SvgDirective {
  @Input("rx-insert-svg")
  set url(value: string) {
    this.service.svgFromUrl(value, "String").subscribe({
      error: (err) => console.error(err),
      next: (data) => {
        this.render.setProperty(this.el.nativeElement, "innerHTML", data);
      },
    });
  }

  constructor(
    private readonly el: ElementRef,
    private readonly render: Renderer2,
    private readonly service: SvgService,
    private readonly container: ViewContainerRef
  ) {}
}
