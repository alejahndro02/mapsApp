import { enableProdMode         } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule              } from './app/app.module';
import { environment            } from './environments/environment';

import   Mapboxgl                 from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = environment.mapToken

if (!navigator.geolocation){
  alert('El navegador no soporta la Geolocalización')
  throw new Error('El navegador no soporta la Geolocalización')
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
