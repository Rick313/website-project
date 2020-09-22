import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { AppState } from "@shared/core-data";

import {
  Infos,
  Settings,
  SettingsActions,
  SettingsSelector,
  SettingsState,
} from "@shared/core-data/settings";
import { BusinessActions } from "@shared/core-data/business";
import { WindowService } from "@shared/services";

import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

interface Menu {
  state: "open" | "close";
  icon: string;
}

type Navigation = {
  label: string;
  path: [string, any?];
  icon: string;
  enable: boolean;
}[];

@Component({
  selector: "rx-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  host: {
    class: "app-container",
  },
})
export class AppComponent implements OnInit {
  setting$: Observable<SettingsState>;
  footer: Infos;
  menu: Menu = {
    state: "close",
    icon: "./assets/icons/bars.svg",
  };

  navigation: Navigation = [
    {
      label: "home",
      path: ["/home"],
      icon: "./assets/icons/home.svg",
      enable: true,
    },
    {
      label: "services",
      path: ["/services"],
      icon: "./assets/icons/laptop-code.svg",
      enable: true,
    },
    {
      label: "about",
      path: ["/about"],
      icon: "./assets/icons/mug-hot.svg",
      enable: true,
    },
    {
      label: "portfolio",
      path: ["/portfolio"],
      icon: "./assets/icons/book.svg",
      enable: false,
    },
    {
      label: "tutorial",
      path: ["/tutorials"],
      icon: "./assets/icons/graduation-cap.svg",
      enable: false,
    },
    {
      label: "contact",
      path: ["/contact"],
      icon: "./assets/icons/envelope.svg",
      enable: true,
    },
  ];

  constructor(
    private readonly http: HttpClient,
    private readonly window: WindowService,
    private readonly store: Store<AppState>
  ) {
    this.window.breakpoint();
  }

  ngOnInit() {
    this.store.dispatch(BusinessActions.load());
    this.store.dispatch(SettingsActions.load());

    this.setting$ = this.store.pipe(select(SettingsSelector.feature));
  }

  close() {
    if (this.menu.state === "open") {
      this.menu = {
        state: "close",
        icon: "./assets/icons/bars.svg",
      };
      return;
    }
  }
  open() {
    if (this.menu.state === "close") {
      this.menu = {
        state: "open",
        icon: "./assets/icons/times.svg",
      };
      return;
    }
  }
  toggle() {
    if (this.menu.state === "close") {
      this.open();
      return;
    }
    if (this.menu.state === "open") {
      this.close();
      return;
    }
  }
}
