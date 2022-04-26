import { Component      } from '@angular/core';
import { LugaresService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent {

  constructor(private lugaresService:LugaresService) { }

  get isUserLocationReady(){
    return this.lugaresService.isUserLocationReady;
  }
}
