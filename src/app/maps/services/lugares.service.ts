import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  useLocations?: [number,number];
get isUserLocationReady():boolean{
  return !!this.useLocations;
}
  constructor() {
    this.getUserLocation();
   }

  getUserLocation():Promise<[number,number]>{
    return new Promise((resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.useLocations= [coords.longitude, coords.latitude]
          resolve(this.useLocations)
        },
        (err)=>{
          alert('No se puedo obeteer la geolocalizacin')
          console.log(err);
          reject();
        }
      )
    })
  }
}
