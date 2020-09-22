import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { BusinessList, BusinessSelectors } from "@shared/core-data/business";
import { select, Store } from "@ngrx/store";
import { AppState } from "@shared/core-data";

@Component({
  selector: "rx-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  cards$: Observable<BusinessList>;
  constructor(private readonly store: Store<AppState>) {}
  ngOnInit(): void {
    this.cards$ = this.store.pipe(
      select(BusinessSelectors.list, {
        select: ["desciption", "name", "picture"],
        order: (a, b) => (a.name > b.name ? 1 : -1),
      })
    );
  }
}
