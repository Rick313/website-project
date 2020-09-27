import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "rx-table",
  template: `
    <table>
      <thead>
        <ng-content select="tr[slot=head]"></ng-content>
      </thead>
      <tbody>
        <ng-content select="tr[slot=body]"></ng-content>
      </tbody>
    </table>
  `,
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
