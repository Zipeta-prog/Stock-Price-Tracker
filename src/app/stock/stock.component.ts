import { Component } from '@angular/core';
import { Stock, StockService } from '../stock.service';

@Component({
  selector: 'app-stock',
  standalone: true,
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent {
  symbol: string = '';
  stock: Stock | null = null;
  error: string | null = null;

  constructor(private stockService: StockService) {}

  getStockPrice(): void {
    if (this.symbol.trim()) {
      this.stockService.getStockPrice(this.symbol).subscribe({
        next: (data) => {
          this.stock = data;
          this.error = null;
        },
        error: () => {
          this.error = 'Error fetching stock price.';
          this.stock = null;
        },
      });
    }
  }
}
