import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const pages = import("../pages");
const routes: Routes = [
  {
    path: "home",
    loadChildren: () => pages.then(({ HomePageModule }) => HomePageModule),
  },
  {
    path: "services",
    loadChildren: () =>
      pages.then(({ BusinessPageModule }) => BusinessPageModule),
  },
  {
    path: "about",
    loadChildren: () => pages.then(({ AboutPageModule }) => AboutPageModule),
  },
  {
    path: "contact",
    loadChildren: () =>
      pages.then(({ ContactPageModule }) => ContactPageModule),
  },

  // Supplement
  {
    path: "portfolio",
    loadChildren: () =>
      pages.then(({ PortfolioPageModule }) => PortfolioPageModule),
  },
  {
    path: "tutorials",
    loadChildren: () =>
      pages.then(({ TutorialsPageModule }) => TutorialsPageModule),
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
