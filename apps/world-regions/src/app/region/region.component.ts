import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Region, Country } from '@libs/shared/domain';
import { Observable } from 'rxjs';
import { RegionService } from '@libs/shared/data';
import { Router, ActivatedRoute } from '@angular/router';
import { startWith, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'practica-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit {
  public region$: Observable<Region>;
  public countries$: Observable<Country[]>;
  public id: string;

  constructor(
    private dataRegionService: RegionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.id) {
      this.region$ = this.dataRegionService.getRegion(this.id);
      this.countries$ = this.dataRegionService.getCountryInRegion(this.id);
    }
  }
}
