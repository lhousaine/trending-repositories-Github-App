import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RepositoryService } from './services/repository.service';
import { JwtInterceptorUtil } from '../core/utils/jwt.Interceptor.util';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    // ...
    RepositoryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorUtil,
      multi: true
    }
    // ...
  ]
})
export class DataModule { }
