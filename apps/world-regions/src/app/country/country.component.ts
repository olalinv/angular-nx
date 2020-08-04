import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '@libs/shared/data';
import { Observable } from 'rxjs';
import { Country } from '@libs/shared/domain';

@Component({
  selector: 'practica-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnInit {
  private id: string;
  public country$: Observable<Country>;
  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.country$ = this.countryService.getCountry(this.id);
  }
}
