import { BusinessEffect } from "./business/business.effect";
import { SettingsEffect } from "./settings/settings.effect";
import { UserEffect } from "./user/user.effect";
import { AuthEffect } from "./auth/auth.effect";
export const effects = [AuthEffect, UserEffect, BusinessEffect, SettingsEffect];
