import { Component, Input, OnInit } from "@angular/core";

export interface BusinessData {
  id: string;
  name: string;
  description: string;
  picture: string;
  button: {
    label: string;
    click: (data: { id: string; name: string }) => void;
  };
}

@Component({
  selector: "rx-business-card",
  template: `
    <img [src]="data.picture" [alt]="'img-' + data.name" />
    <p>{{ data.description }}</p>
    <button
      type="button"
      (click)="data.button.click({ id: data.id, name: data.name })"
    >
      {{ data.button.label }}
    </button>
  `,
  styleUrls: ["./business-card.component.scss"],
})
export class BusinessCardComponent implements OnInit {
  @Input("data") data: BusinessData;
  constructor() {}
  ngOnInit(): void {}
}
