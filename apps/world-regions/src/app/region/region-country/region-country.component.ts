import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Country } from '@libs/shared/domain';

@Component({
  selector: 'practica-region-country',
  templateUrl: './region-country.component.html',
  styleUrls: ['./region-country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionCountryComponent implements OnInit {
  @Input() countries: Country[];
  constructor() {}

  ngOnInit() {}
}
