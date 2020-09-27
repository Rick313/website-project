import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const pages = import("../pages");

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => pages.then(({ HomePageModule }) => HomePageModule),
  },
  {
    path: "resources",
    loadChildren: () =>
      pages.then(({ ResourcesPageModule }) => ResourcesPageModule),
  },
  {
    path: "users",
    loadChildren: () => pages.then(({ UsersPageModule }) => UsersPageModule),
  },
  {
    path: "settings",
    loadChildren: () =>
      pages.then(({ SettingsPageModule }) => SettingsPageModule),
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
