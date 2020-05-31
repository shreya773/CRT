import { Component, OnInit } from '@angular/core';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat:string='';
  lng:string='';

  location:Object;
  
  constructor(private map: MapsService) { }

  ngOnInit() {
    this.map.getLocation().subscribe( data =>{
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })
  }

}
