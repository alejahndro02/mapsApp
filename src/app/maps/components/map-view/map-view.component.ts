import { Component, 
         AfterViewInit,         
         ViewChild,
         ElementRef     } from '@angular/core';
import { Map,
         Marker,
         Popup          } from 'mapbox-gl';
import { LugaresService } from '../../services/lugares.service';
import { MapService     } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!:ElementRef

  constructor(
    private lugaresService: LugaresService,
    private mapService:MapService
    ) { }

  ngAfterViewInit(): void {
    if(!this.lugaresService.useLocation) throw Error('No hay lugaresSevce.userLocations')
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.lugaresService.useLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
      });
      
    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    new Marker({color:'red'})
      .setLngLat(this.lugaresService.useLocation)
      .setPopup(popup)
      .addTo(map)
    this.mapService.setmap(map);
  }
}
