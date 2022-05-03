
import { Injectable  } from '@angular/core'
import { HttpClient, 
         HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})
export class DirectionsApiClient extends HttpClient {
    
    drivingUrl: string = environment.mapUrlDriving 
    
    constructor(handler:HttpHandler){
        super(handler)
    }
    override get<T>( url:string){
        url=this.drivingUrl + url
        return super.get<T>(url,{
            params:{
                alternatives:false,
                geometries:'geojson',
                languaje:'es',
                overview:'simplified',
                steps:false,
                access_token: environment.mapToken,
            }
        })
    }
}