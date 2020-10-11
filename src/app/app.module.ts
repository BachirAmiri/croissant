import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card'
import { ChartComponent } from './chart/chart.component';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import 'echarts/theme/macarons.js';
import { NextComponent } from './next/next.component';

@NgModule({
  declarations: [AppComponent, ChartComponent, NextComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    NgxEchartsModule.forRoot({ echarts }),
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
