import { Injectable } from '@angular/core';
import { LngLatLike, 
         Map        } from 'mapbox-gl'

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map?: Map;
  get isMapReady(){
    return !!this.map
  }
  constructor() { }

  setmap(map:Map){
    this.map=map
  }
  flyto(coord:LngLatLike){
    if(!this.isMapReady) throw Error('El mapa aun no ha sido inicializado')
    this.map?.flyTo({
      zoom:14,
      center:coord
    })
  }
}
