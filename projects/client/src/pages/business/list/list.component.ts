import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import {
  AppState,
  BusinessList,
  BusinessSelectors,
} from "@libraries/core-data";
import { map } from "rxjs/operators";
import { BusinessData } from "@libraries/ui";
import { Router } from "@angular/router";

@Component({
  selector: "rx-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  cards$: Observable<BusinessData[]>;
  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.cards$ = this.store.pipe(
      select(BusinessSelectors.list, {
        select: ["description", "name", "picture", "id"],
        order: (a, b) => (a.name > b.name ? 1 : -1),
      }),
      map((data) =>
        data.map((business) => ({
          id: business.id,
          picture: business.picture,
          name: business.name,
          description: business.description,
          button: {
            label: business.name,
            click: (data) => {
              this.router.navigate(["/services", data.name, data.id]);
            },
          },
        }))
      )
    );
  }
}
