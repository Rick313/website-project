import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, select } from "@ngrx/store";
import { Observable, of } from "rxjs";

import {
  AppState,
  AuthActions,
  BusinessActions,
  BusinessList,
  BusinessSelectors,
} from "@libraries/core-data";

import { BusinessData } from "@libraries/ui";
import { map } from "rxjs/operators";

@Component({
  selector: "rx-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  host: {
    class: "app-container dark",
  },
})
export class AppComponent implements OnInit {
  title = "dashboard";
  user$: Observable<any>;
  authForm: FormGroup;
  business$: Observable<BusinessList>;
  navigation = [
    { path: ["/home"], label: "home" },
    { path: ["/resources"], label: "resources" },
    { path: ["/users"], label: "users" },
    { path: ["/settings"], label: "settings" },
  ];

  constructor(
    private readonly store: Store<AppState>,
    private readonly formBuilder: FormBuilder
  ) {
    this.authForm = this.formBuilder.group({
      email: ["example@mail.com", [Validators.email, Validators.required]],
      password: ["123456", [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(BusinessActions.load({}));
    this.user$ = of(true);
    this.business$ = this.store.pipe(select(BusinessSelectors.list));
  }

  register() {
    if (this.authForm.valid) {
      const { email, password } = this.authForm.value;
      this.store.dispatch(AuthActions.register({ email, password }));
      this.authForm.reset();
    }
  }
  login() {
    if (this.authForm.valid) {
      const { email, password } = this.authForm.value;
      this.store.dispatch(AuthActions.login({ email, password }));
      this.authForm.reset();
    }
  }
}
