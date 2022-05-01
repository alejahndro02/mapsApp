
import { Injectable  } from '@angular/core'
import { HttpClient, 
         HttpHandler, 
         HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})
export class PlacesApiClient extends HttpClient {
    
    baseUrl: string = environment.mapUrl 
    
    constructor(handler:HttpHandler){
        super(handler)
    }
    override get<T>(url:string, options:{
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
    }){
        url=this.baseUrl + url
        return super.get<T>(url,{
            params:{
                limit:5,
                languaje:'es',
                access_token: environment.mapToken,
                ...options.params
            }
        })
    }
}