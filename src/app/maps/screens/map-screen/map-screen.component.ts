import { Component, OnInit } from '@angular/core';
import { LugaresService    } from '../../services/lugares.service';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent implements OnInit {

  constructor(private lugaresService:LugaresService) { }

  ngOnInit(): void {
  }

}
