import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted', req);
        //to edit you must clone it. Don't edit the incoming request
        // const copiedReq = req.clone({headers: req.headers.append('','')});
        const copiedReq = req.clone({
            params: req.params.set('auth', this.authService.getToken())
        });
        return next.handle(copiedReq); //let the request continue
    }
}
