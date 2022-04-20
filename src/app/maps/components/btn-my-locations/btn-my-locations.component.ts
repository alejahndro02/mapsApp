import { Component      } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-btn-my-locations',
  templateUrl: './btn-my-locations.component.html',
  styleUrls: ['./btn-my-locations.component.css']
})
export class BtnMyLocationsComponent{

  constructor(private lugares:LugaresService) { }

  ngOnInit(): void {
  }
  goToMyLocation(){
    console.log('Voy a mi punto de origen');
    
  }
}
