import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetaUserGuard } from './beta-user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feature',
    pathMatch: 'full'
  },
  {
    path: 'feature',
    canMatch: [BetaUserGuard],
    loadChildren: () =>
      import('./beta-feature/beta-feature.module').then(
        (m) => m.BetaFeatureModule
      ),
  },
  {
    path: 'feature',
    loadChildren: () =>
      import('./feature/feature.module').then((m) => m.FeatureModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
