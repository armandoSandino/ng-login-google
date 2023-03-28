import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  excluded: Array<string>;
  constructor(private auth: AuthService) {
    this.excluded = ['signin','password/email','assets'];
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //throw new Error("Method not implemented.");
    for (let excludedUrl of this.excluded) {
      if (request.url.includes(excludedUrl)) {
        return next.handle(request);
      }
    }
    
    /*
    let result = from(this.auth.getToken()).pipe(
        switchMap( ( token: string ) => {

        let req = request.clone({
          setParams: {
            token: token,
            company_id: localStorage.getItem('company_id')
          },
        });
        
        return next.handle(req);

      })
    );
    return result;
    */
   
   console.warn('Datos del request');
   console.warn( request );
   return next.handle( request );
  }

}