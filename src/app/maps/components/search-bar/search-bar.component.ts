import { Component      } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  // contorolar el comportamirnto de debounce
  private debounceTimer?:NodeJS.Timeout;

  constructor(private lugaresService:LugaresService) { }

  onQueryChanged(query:string=''){
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer= setTimeout(()=>{
      this.lugaresService.getPlacesByQuery(query)
    }, 350)
  }
}
