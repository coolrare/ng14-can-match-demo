import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetaFeatureComponent } from './beta-feature.component';

const routes: Routes = [{ path: '', component: BetaFeatureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetaFeatureRoutingModule { }
