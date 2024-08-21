import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Stock {
  symbol: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = '/api/stocks/';

  constructor(private http: HttpClient) {}

  getStockPrice(symbol: string): Observable<Stock> {
    return this.http.get<Stock>(`${this.apiUrl}${symbol}`);
  }
}
