import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "rx-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "dashboard";
  user$: Observable<any>;
  authForm: FormBuilder;

  constructor(private readonly formBuilder: FormBuilder) {
    this.user$ = new Observable();

    this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]],
    });
  }
  register() {}
}
