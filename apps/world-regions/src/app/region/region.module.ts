import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { RegionCountryComponent } from './region-country/region-country.component';
import { RegionDetailComponent } from './region-detail/region-detail.component';
import { MaterialModule } from '@libs/ui/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
const routes: Routes = [{ path: '', component: RegionComponent }];

@NgModule({
  declarations: [
    RegionComponent,
    RegionCountryComponent,
    RegionDetailComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ScrollingModule
  ]
})
export class RegionModule {}
