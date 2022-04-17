import { enableProdMode         } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule              } from './app/app.module';
import { environment            } from './environments/environment';

import   Mapboxgl                 from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlamFobmRybyIsImEiOiJjbDB1Ymw0eTIwN3JkM2ttdGp5dXI5M29rIn0.dCeUmYGiS_dgDnStR_D0-w';

if (!navigator.geolocation){
  alert('El navegador no soportta la eolocalización')
  throw new Error('El navegador no soportta la eolocalización')
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
