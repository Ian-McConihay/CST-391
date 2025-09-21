import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './info.html',
  styleUrl: './info.css'
})
export class InfoComponent {
  @Input() name: string = '';

  quantity: number = 0;
  products: string[] = ['Product A', 'Product B', 'Product C'];
  selectedProduct: string = '';

  onSubmit() {
    console.log(`Buying ${this.quantity} of ${this.selectedProduct}`);
  }

  newInfo() {
    this.quantity = 0;
    this.selectedProduct = '';
  }
}
