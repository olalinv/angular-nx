import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryService } from './country.service';
import { Observable } from 'rxjs';
describe('GIVEN: SERVICE OF COUNTRY', () => {
  let countryService: CountryService;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });

  it('THEN: should return a observable when calling .getCountry()', () => {
    expect(countryService.getCountry('ESP')).toBeInstanceOf(Observable);
  });
});
