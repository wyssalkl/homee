import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser && currentUser.jwt) {
      const clonedReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ` + currentUser.jwt
        }
      });
      return next.handle(clonedReq);
    }
    return next.handle(request);

  }
}
