import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages').then((p) => p.HomeModule),
  },
  {
    path: 'services',
    loadChildren: () => import('@pages').then((p) => p.ServicesModule),
  },
  {
    path: 'about',
    loadChildren: () => import('@pages').then((p) => p.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('@pages').then((p) => p.ContactModule),
  },

  // Supplement
  {
    path: 'portfolio',
    loadChildren: () => import('@pages').then((p) => p.PortfolioModule),
  },
  {
    path: 'tutorials',
    loadChildren: () => import('@pages').then((p) => p.TutorialsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
