import { NgModule                } from '@angular/core';
import { CommonModule            } from '@angular/common';
import { MapScreenComponent      } from './screens/map-screen/map-screen.component';
import { MapViewComponent        } from './components/map-view/map-view.component';
import { LoadingComponent        } from './components/loading/loading.component';
import { BtnMyLocationsComponent } from './components/btn-my-locations/btn-my-locations.component';
import { LogoAngularComponent    } from './components/logo-angular/logo-angular.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMyLocationsComponent,
    LogoAngularComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MapScreenComponent

  ]
})
export class MapsModule { }
