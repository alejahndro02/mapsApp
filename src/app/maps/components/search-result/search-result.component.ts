import { Component, 
         OnInit         } from '@angular/core';
import { Feature        } from '../../interfaces/places';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private lugaresService: LugaresService) { }
  get isLoadingPlaces():boolean{
    return this.lugaresService.isLoadingPlaces
  }
  get places():Feature[]{
    return this.lugaresService.places
  }

  ngOnInit(): void {
  }

}
