import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewContainerRef,
} from "@angular/core";

@Directive({ selector: "[rx-button]" })
export class ButtonDirective {
  private _color: string;
  @Input("color")
  set color(value: string) {
    this.render.removeClass(this.el.nativeElement, this.color);
    this._color = value;
    this.render.addClass(this.el.nativeElement, this.color);
  }
  get color() {
    return this._color;
  }

  constructor(
    private readonly el: ElementRef,
    private readonly render: Renderer2,
    private readonly container: ViewContainerRef
  ) {
    if (!this.color) {
      this.color = "basic";
    }
  }
}
