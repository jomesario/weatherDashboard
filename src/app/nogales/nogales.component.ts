import { UnitDegreeService } from './../unit-degree.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-nogales',
  templateUrl: './nogales.component.html',
  styleUrls: ['./nogales.component.css']
})
export class NogalesComponent implements OnInit {
  lat: number = 31.340377;
  lon: number = -110.934253;
  
  currentTemp: number;
  unitDegree: string;
  weather: any;
  url: string;
  apiKey:string='e5c1574afbda44edace38e7263990a61';



  current_date = new Date();
  dateMinus1 = new Date();
  dateMinus2 = new Date();
  chart = [];
  max_temps: any[16];
  min_temps: any[16];
  /**
   * obregonComponenct constructor, needs as parameter an httpClient and a 
   * unitDegreeService Object to instantiate
   * @param http 
   * @param data 
   */
  constructor(private http: HttpClient, private data: UnitDegreeService) { }

  /**
   * Returns the lattitude of the city
   */
  getLat() {
    return 'lat=' + this.lat;
  }

  /**
   * Returns the longitude of the city
   */
  getLon() {
    return 'lon=' + this.lon;
  }

  /**
   * Make an Http Request GET to get the current weather in Celsius
   */
  getCurrentCelcius() {

    this.http.get('https://api.weatherbit.io/v2.0/current?'
      + this.getLat() + '&' + this.getLon() + '&key='+ this.apiKey).subscribe
      ((response) => {
        this.weather = response;
        console.log('Current' + this.weather.data[0].app_temp);
        this.currentTemp = this.weather.data[0].app_temp;
      });
  }

  /**
     * Makes an Http Request GET to get the current weather in Farenheit
     */
  getCurrentFarenheit() {
    this.http.get('https://api.weatherbit.io/v2.0/current?'
      + this.getLat() + '&' + this.getLon() + '&units=I' + '&key='+ this.apiKey).subscribe
      ((response) => {
        this.weather = response;
        console.log('Current' + this.weather.data[0].datetime);
        this.currentTemp = this.weather.data[0].app_temp;
      });
  }

  /**
   * Makes an Http Request GET to get the forecast for the next
   * 15 days on Celsius and creates a chart with the Min temp and
   * the Max temp
   */

  getForecastCelsius() {
    //https://api.weatherbit.io/v2.0/forecast/daily?lat=27.482773&lon=-109.930367&key=4c2236b4850643d29d0a3c7f6979be3e
    let max_tempss = [16];
    let min_tempss = [16];
    let weatherDates = [16];

    //Http Request
    this.http.get('https://api.weatherbit.io/v2.0/forecast/daily?'
      + this.getLat() + '&' + this.getLon() + '&key='+ this.apiKey).subscribe
      ((response) => {

        this.weather = response;
        for (var i = 0; i < this.weather['data'].length; i++) {
          max_tempss[i] = this.weather.data[i].max_temp
          min_tempss[i] = this.weather.data[i].min_temp
          weatherDates[i] = this.weather.data[i].datetime
        }
        console.log('max temps' + max_tempss);
        console.log('min temps' + min_tempss);
        console.log('min temps' + weatherDates);
        
        //Creating a Chart with the response
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: max_tempss,
                borderColor: '#3cba9f',
                label: 'Max Temp',
                fill: false
              },
              {
                data: min_tempss,
                borderColor: '#ffcc00',
                label: 'Min Temp',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
      });

  }
/**
   * Makes an Http Request GET to get the forecast for the next
   * 15 days on Celsius and creates a chart with the Min temp and
   * the Max temp
   */

  getForecastFarenheit() {
    let max_tempss = [16];
    let min_tempss = [16];
    let weatherDates = [16];

    //Http Request
    this.http.get('https://api.weatherbit.io/v2.0/forecast/daily?'
      + this.getLat() + '&' + this.getLon() + '&units=I' + '&key='+ this.apiKey).subscribe
      ((response) => {

        this.weather = response;
        for (var i = 0; i < this.weather['data'].length; i++) {
          max_tempss[i] = this.weather.data[i].max_temp
          min_tempss[i] = this.weather.data[i].min_temp
          weatherDates[i] = this.weather.data[i].datetime
        }
        console.log('max temps' + max_tempss);
        console.log('min temps' + min_tempss);
        console.log('min temps' + weatherDates);
        
        //Creating a chart with the response
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: max_tempss,
                borderColor: '#3cba9f',
                label: 'Max Temp',
                fill: false
              },
              {
                data: min_tempss,
                borderColor: '#ffcc00',
                label: 'Max Temp',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
      });
  }

  /**
   * Function call when the component is loaded
   */
  ngOnInit() {

    //Gets the current UnitDegree from the unit-degree service
    this.data.currentUnit.subscribe(unitDegree => this.unitDegree = unitDegree);

    if (this.unitDegree == 'C') {
      this.getCurrentCelcius();
      this.getForecastCelsius();

      //this.getChartCelsius();
    }

    if (this.unitDegree == 'F') {
      this.getCurrentFarenheit();
      this.getForecastFarenheit();
      //this.getChartFarenheit();
    }
  }

}
