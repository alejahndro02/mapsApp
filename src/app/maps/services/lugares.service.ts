import { Injectable      } from '@angular/core';
import { PlacesApiClient } from '../api';
import { Feature, 
         PlacesResponse  } from '../interfaces/places';

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
    private placesApi: PlacesApiClient ) {
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
    if(!this.useLocation) throw Error ('No hay userLocations')

    this.isLoadingPlaces= true
    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
      params:{
        proximity:this.useLocation?.join(',')
      }
    })
    .subscribe(resp =>{
      console.log(resp.features);
      this.isLoadingPlaces = false
      this.places = resp.features
    });
  }
}
