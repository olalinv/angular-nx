import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '@libs/shared/domain';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) {}

  public getCountry(id: string): Observable<Country> {
    const urlCountry = `http://api.worldbank.org/V2/country/${id}?format=json`;
    return this.http.get<Country>(urlCountry).pipe(
      map((data: any) => {
        console.log(data[1]);
        return data[1][0];
      })
    );
  }
}
