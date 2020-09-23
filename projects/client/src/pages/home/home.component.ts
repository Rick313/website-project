import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

import { AppState } from "@shared/core-data";
import {
  BusinessSelectors,
  BusinessList,
  BusinessActions,
} from "@shared/core-data/business";

@Component({
  selector: "rx-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  cards$: Observable<BusinessList>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.cards$ = this.store.pipe(
      select(BusinessSelectors.list, {
        select: ["picture", "name", "desciption", "id"],
        order: (a, b) => (a.name > b.name ? 1 : -1),
        take: 3,
      })
    );
  }
}
