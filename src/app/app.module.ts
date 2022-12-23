import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardPageModule } from './dashboard/dashboard.module';
//import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './_helpers/http.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     HttpClientModule, 
     FormsModule,
     HttpClientModule,
     DashboardPageModule,    
     AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    httpInterceptorProviders,
    
   

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
