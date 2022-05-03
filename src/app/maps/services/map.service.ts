import { Injectable   } from '@angular/core';
import { LngLatBounds, 
         LngLatLike, 
         Map,        
         Marker,
         Popup        } from 'mapbox-gl'
import { Feature      } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  
  private map?: Map;
  private markers: Marker []=[]
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
  createMarkerFromPlaces(places:Feature[], userLocation:[number, number]){
    if ( !this.map) throw Error('Mapa no inicializado');
    // Se elimina visualmente aunque siga exixtiendo en el arreglo 
    this.markers.forEach(maker => maker.remove())
    const newMarkers =[];
    for(const place of places){
      const [lng, lat ]= place.center
      const popup= new Popup()
      .setHTML(`
        <h6>${place.text}</h6>
        <span>${place.place_name}</span>
        `)
        const newMarker = new Marker()
          .setLngLat([lng, lat])
          .setPopup(popup)
          .addTo(this.map)
        newMarkers.push(newMarker)
        this.markers = newMarkers
      if (places.length === 0) return;


        //limitar el mapa
      const bounds= new LngLatBounds()
      newMarkers.forEach(marker => bounds.extend(marker.getLngLat()))
      bounds.extend(userLocation)
    
      this.map.fitBounds(bounds, {
        padding:200
      })
    }
  }
}
