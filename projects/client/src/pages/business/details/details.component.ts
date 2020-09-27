import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { AppState, Business, BusinessSelectors } from "@libraries/core-data";

@Component({
  selector: "rx-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  business$: Observable<Business>;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.business$ = this.route.params.pipe(
      switchMap((params) =>
        this.store.pipe(
          select(BusinessSelectors.get, {
            where: (data) => data.id === params.id,
          })
        )
      )
    );
  }

  back() {
    this.router.navigate(["/services"]);
  }
}
