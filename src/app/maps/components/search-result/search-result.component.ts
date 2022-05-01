import { Component, 
         OnInit         } from '@angular/core';
import { Feature        } from '../../interfaces/places';
import { MapService     } from '../../services';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  
  selectedID: string=''

  constructor(
      private lugaresService: LugaresService,
      private mapService:MapService 
    ) { }
  get isLoadingPlaces():boolean{
    return this.lugaresService.isLoadingPlaces
  }
  get places():Feature[]{
    return this.lugaresService.places
  }

  ngOnInit(): void {
  }
  flyTo(place: Feature){
    this.selectedID=place.id
    const [lng, lat]= place.center
    this.mapService.flyto([lng, lat])
  }
}
