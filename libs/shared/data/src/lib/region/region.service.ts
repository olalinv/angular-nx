import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Region, Country } from '@libs/shared/domain';
@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private region$ = new ReplaySubject<Region>(1);

  constructor(private http: HttpClient) {}

  public getAllRegions(): Observable<Region[]> {
    const urlRegions = 'http://api.worldbank.org/v2/region/?format=json';
    return this.http.get<Region[]>(urlRegions).pipe(
      map((data: any) => {
        return data[1].filter(item => item.id !== '');
      })
    );
  }

  public getRegion(id: string): Observable<Region> {
    const urlRegion = `http://api.worldbank.org/v2/region/${id}?format=json`;
    return this.http.get<Region>(urlRegion).pipe(
      map((data: any) => {
        return data[1][0];
      })
    );
  }

  public getCountryInRegion(code: string): Observable<Country[]> {
    const urlCountryRegion = `http://api.worldbank.org/v2/region/${code}/country?per_page=1000&format=json`;
    return this.http.get<Country[]>(urlCountryRegion).pipe(
      map((data: any) => {
        return data[1];
      })
    );
  }
}
