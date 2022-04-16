import { enableProdMode         } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule              } from './app/app.module';
import { environment            } from './environments/environment';

if (!navigator.geolocation){
  alert('El navegador no soportta la eolocalización')
  throw new Error('El navegador no soportta la eolocalización')
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
