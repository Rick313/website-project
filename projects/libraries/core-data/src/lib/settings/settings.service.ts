import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Settings } from "./settings.model";

const settingsData: Settings = {
  infos: {
    copyright: "",
    years: "2020",
    owner: {
      name: "Rafaideen Richard",
      tel: "05 49 37 35 65",
      email: "",
      siret: "",
      adrress: "",
    },
  },
};

@Injectable({ providedIn: "root" })
export class SettingsService {
  private _settings = settingsData;
  private set settings(value) {
    this._settings = value;
  }
  private get settings() {
    return this._settings;
  }

  constructor(private readonly http: HttpClient) {}
  get(): Observable<Settings> {
    return new Observable((sub) => sub.next(this.settings));
  }
}
