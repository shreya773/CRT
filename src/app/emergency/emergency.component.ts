import { Component, OnInit } from '@angular/core';
import { Weatherservice } from '../weatherservice.service';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {
  lat;
  lng;
  weather;

  constructor(private Weatherservice: Weatherservice,private map: MapsService) { }

  ngOnInit() {
   // this.getLocation();

    this.map.getLocation().subscribe( data =>{
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })
  }

  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat=success.coords.latitude;
        this.lng=success.coords.longitude;

        this.Weatherservice.getWeatherDataByCoords(this.lat,this.lng).subscribe(data=>{
          this.weather=data;
        })
      })
    }
  }



}
