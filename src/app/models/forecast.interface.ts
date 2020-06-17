import { Weather } from './weather.interface';

export interface Forecast {
  data: {
    ClimateAverages: [];
    current_condition: [];
    weather: Weather[];
  };
}
