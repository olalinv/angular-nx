import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegionService } from './region.service';
import { Observable } from 'rxjs';

describe('GIVE: A RegionService', () => {
  let regionService: RegionService;
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  it('THEN: should be created', () => {
    expect(regionService).toBeTruthy();
  });

  it('THEN: should return array of Region Model in a observable', () => {
    expect(regionService.getAllRegions()).toBeInstanceOf(Observable);
  });
});
