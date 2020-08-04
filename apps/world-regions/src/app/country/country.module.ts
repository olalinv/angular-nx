import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { MaterialModule } from '@libs/ui/material';

const routes: Routes = [{ path: '', component: CountryComponent }];

@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class CountryModule {}
