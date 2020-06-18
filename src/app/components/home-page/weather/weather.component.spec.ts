import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetDataService } from '../../../services/get-data.service';
import { of } from 'rxjs';

describe('WeatherPageComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let service: GetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ WeatherComponent ],
      providers: [ GetDataService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GetDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call GetDataService', () => {
    spyOn(service, 'getWeather').and.returnValue(of({}));
    component.ngOnInit();
    expect(service.getWeather).toHaveBeenCalled();
  });
});
