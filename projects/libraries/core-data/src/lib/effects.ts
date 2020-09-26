import { BusinessEffect } from "./business/business.effect";
import { SettingsEffect } from "./settings/settings.effect";
import { UserEffect } from "./user/user.effect";
import { AuthEffect } from "./auth/auth.effect";
import { InjectionToken } from "@angular/core";

export const effects = [AuthEffect, UserEffect, BusinessEffect, SettingsEffect];
