import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("@pages").then((p) => p.HomePageModule),
  },
  {
    path: "services",
    loadChildren: () => import("@pages").then((p) => p.BusinessPageModule),
  },
  {
    path: "about",
    loadChildren: () => import("@pages").then((p) => p.AboutPageModule),
  },
  {
    path: "contact",
    loadChildren: () => import("@pages").then((p) => p.ContactPageModule),
  },

  // Supplement
  {
    path: "portfolio",
    loadChildren: () => import("@pages").then((p) => p.PortfolioPageModule),
  },
  {
    path: "tutorials",
    loadChildren: () => import("@pages").then((p) => p.TutorialsPageModule),
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
