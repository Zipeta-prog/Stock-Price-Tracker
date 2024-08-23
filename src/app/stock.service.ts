import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Stock {
  symbol: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = 'http://localhost:8080/api/stocks/';

  constructor(private http: HttpClient) {}

  getStockPrice(symbol: string): Observable<Stock> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('user:password'), // Replace with actual credentials
    });

    return this.http.get<Stock>(`${this.apiUrl}${symbol}`, { headers });
  }
}
