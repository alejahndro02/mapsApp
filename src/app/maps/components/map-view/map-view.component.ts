import { Component, 
         OnInit         } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor(private lugaresService: LugaresService) { }

  ngOnInit(): void {
    console.log(this.lugaresService.useLocations);
  }

}
