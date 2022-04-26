import { HttpClient     } from '@angular/common/http';
import { Injectable     } from '@angular/core';
import { environment    } from '../../../environments/environment'
import { Feature, 
         PlacesResponse } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  useLocation?: [number,number];
  isLoadingPlaces:boolean = false;
  places:Feature[]=[];

  get isUserLocationReady():boolean{
    return !!this.useLocation;
  }

  constructor( 
    private http: HttpClient ) {
      this.getUserLocation();
   }

  async getUserLocation():Promise<[number,number]>{
    return new Promise((resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation)
        },
        (err)=>{
          alert('No se puedo obetener la Geolocalización')
          console.log(err);
          reject();
        }
      )
    })
  }
  getPlacesByQuery(query:string=""){
    // Evaluar cuando el query es nulo 
    this.isLoadingPlaces= true
    // this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/{query}.json?proximity=-99.08444586145016%2C19.394061899610065&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiYWxlamFobmRybyIsImEiOiJjbDB1Ymw0eTIwN3JkM2ttdGp5dXI5M29rIn0.dCeUmYGiS_dgDnStR_D0-w`)
    this.http.get<PlacesResponse>(`${environment.mapUrl}/${query}.json?proximity=${this.useLocation}&types=place%2Cpostcode%2Caddress&access_token=${environment.mapToken}`)
    .subscribe(resp =>{
      console.log(resp.features);
      this.isLoadingPlaces = false
      this.places = resp.features
    });
  }
}
