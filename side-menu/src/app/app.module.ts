import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MtAccordionMenuComponent } from 'src/app/components/mt-accordion-menu/mt-accordion-menu.component';
import { MtNavBarMenuComponent } from './components/mt-nav-bar-menu/mt-nav-bar-menu.component';
import { HttpClientModule } from '@angular/common/http';

// Third Party
import { LoggingService, LoggingServiceModule } from 'ionic-logging-service';
// Custom Config
// import { LoggerConfig } from '';
import { LoggerConfig } from './configs/logger.config';

export function configureLogging(loggingService: LoggingService): () => void {
  return () => loggingService.configure(LoggerConfig.configuration);
}
@NgModule({
  declarations: [AppComponent, MtAccordionMenuComponent, MtNavBarMenuComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    LoggingServiceModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
