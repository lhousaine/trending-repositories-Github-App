import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Store } from '@ngxs/store';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptorUtil implements HttpInterceptor {
  constructor(private store: Store) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.store.selectSnapshot((state) => state.currentUser.token);
    if (token) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + `${token}`
        }
      });
    }
    return next.handle(request);
  }
}
