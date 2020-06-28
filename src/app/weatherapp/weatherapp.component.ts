import { Component, OnInit } from '@angular/core';
import { Weatherservice } from '../weatherservice.service';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent implements OnInit {

  lat;
  lon;
  weather;

  constructor(private Weatherservice: Weatherservice) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat=success.coords.latitude;
        this.lat=success.coords.longitude;

        this.Weatherservice.getWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
          this.weather=data;
        })
      })
    }
  }

}
