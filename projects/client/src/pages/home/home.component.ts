import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppState, BusinessSelectors } from "@libraries/core-data";
import { map, tap } from "rxjs/operators";
import { BusinessData } from "@libraries/ui";
import { Router } from "@angular/router";

@Component({
  selector: "rx-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  cards$: Observable<BusinessData[]>;
  constructor(
    private store: Store<AppState>,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.cards$ = this.store.pipe(
      select(BusinessSelectors.list, {
        select: ["picture", "name", "description", "id"],
        order: (a, b) => (a.name > b.name ? 1 : -1),
        take: 3,
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
