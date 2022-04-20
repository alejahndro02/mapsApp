import { Component, 
         AfterViewInit,         
         ViewChild,
         ElementRef     } from '@angular/core';
import { Map       } from 'mapbox-gl';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!:ElementRef

  constructor(private lugaresService: LugaresService) { }

  ngAfterViewInit(): void {
    if(!this.lugaresService.useLocations) throw Error('No hay lugaresSevce.userLocations')
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.lugaresService.useLocations, // starting position [lng, lat]
      zoom: 14 // starting zoom
      });

  }

}
