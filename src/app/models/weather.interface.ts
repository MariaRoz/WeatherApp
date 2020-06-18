export interface Weather {
    ClimateAverages: [];
    current_condition: [{
      temp_C: number,
      FeelsLikeC: number,
      weatherIconUrl: [{
        value: string
      }],
      weatherDesc: [{
        value: string
      }]
    }];
    weather: {
      date: Date;
      mintempC: number;
      maxtempC: number;
    };
}
