import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { StockComponent } from './app/stock/stock.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(StockComponent),
    provideRouter([{ path: '', component: StockComponent }]),
  ],
}).catch((err) => console.error(err));
