import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { WindowService } from "@shared/services";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface Menu {
  state: "open" | "close";
  icon: string;
}

interface Footer {
  owner: Owner;
  copyright?: string;
  years?: string;
}

interface Owner {
  name: string;
  tel?: string;
  email?: string;
  siret?: string;
  adrress?: string;
}

type Navigation = {
  label: string;
  path: [string, any?];
  icon: string;
  enable: boolean;
}[];

interface Setting {
  infos: Footer;
}

@Component({
  selector: "rx-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  host: {
    class: "app-container",
  },
})
export class AppComponent implements OnInit {
  setting$: Observable<boolean>;
  footer: Footer;
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
    private readonly el: ElementRef,
    private readonly render: Renderer2,
    private readonly http: HttpClient,
    private readonly window: WindowService
  ) {
    this.window.breakpoint();
  }

  ngOnInit() {
    this.setting$ = this.http
      .get<Setting>("./assets/data/infos.data.json")
      .pipe(
        map((data) => {
          this.footer = data.infos;
          return true;
        })
      );
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
