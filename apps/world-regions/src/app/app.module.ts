import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@libs/ui/layout';
import { MaterialModule } from '@libs/ui/material';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: 'region/:id',
          loadChildren: () =>
            import('./region/region.module').then(m => m.RegionModule)
        },
        {
          path: 'region',
          loadChildren: () =>
            import('./region/region.module').then(m => m.RegionModule)
        },
        {
          path: 'country/:id',
          loadChildren: () =>
            import('./country/country.module').then(m => m.CountryModule)
        },
        {
          path: 'home',
          loadChildren: () =>
            import('./home/home.module').then(m => m.HomeModule)
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
