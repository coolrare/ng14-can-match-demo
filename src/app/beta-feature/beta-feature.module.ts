import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetaFeatureRoutingModule } from './beta-feature-routing.module';
import { BetaFeatureComponent } from './beta-feature.component';


@NgModule({
  declarations: [
    BetaFeatureComponent
  ],
  imports: [
    CommonModule,
    BetaFeatureRoutingModule
  ]
})
export class BetaFeatureModule { }
