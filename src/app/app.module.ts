import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardPageModule } from './dashboard/dashboard.module';
//import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
     IonicModule.forRoot(),
    // IonicStorageModule.forRoot(),
         HttpClientModule, 
    DashboardPageModule,    
    AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
