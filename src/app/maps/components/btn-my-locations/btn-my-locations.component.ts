import { Component      } from '@angular/core';
import { MapService     } from '../../services/map.service';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-btn-my-locations',
  templateUrl: './btn-my-locations.component.html',
  styleUrls: ['./btn-my-locations.component.css']
})
export class BtnMyLocationsComponent{

  constructor(
    private lugaresService:LugaresService,
    private mapService:MapService) { }

  ngOnInit(): void {
  }
  goToMyLocation(){
    console.log('Voy a mi punto de origen');
    if(!this.lugaresService.isUserLocationReady) throw Error('No hay ubicacion');
    if(!this.mapService.isMapReady) throw Error('No esta disponible el mapa');

    this.mapService.flyto(this.lugaresService.useLocations!)
    
  }
}
