import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Weatherservice {
  url = 'https://apiopenweathermap.org/data/2.5/weather';
  apikey = 'd85347133604a8834d03a26a94935dae';

constructor(private http: HttpClient) { }

getWeatherDataByCoords( lat, lon){
  let params= new HttpParams()
  .set ('lat',lat)
  .set ('lon',lon)
  .set ('unit','imperial')
  .set ('appid', this.apikey)

  return this.http.get(this.url,{params});
  
}

}
