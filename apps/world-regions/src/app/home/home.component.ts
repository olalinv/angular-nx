import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegionService } from '@libs/shared/data';
import { Observable, EMPTY } from 'rxjs';
import { Region } from '@libs/shared/domain';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'practica-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'code', 'iso2code', 'name'];
  public regions$: Observable<Region[]> = EMPTY;
  public filterFormGroup: FormGroup;

  constructor(
    private dataRegionService: RegionService,
    private fb: FormBuilder,
  ) {
    this.filterFormGroup = this.fb.group({
      region: '',
    })
  }

  ngOnInit() {
    this.regions$ = this.dataRegionService.getAllRegions();
  }

  filterById() {
    this.regions$ = this.dataRegionService.getRegion(this.filterFormGroup.value.region)
    .pipe(map(val => val[1]));
  }

}
