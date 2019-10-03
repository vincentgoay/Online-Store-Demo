import { Component } from '@angular/core';
import { SKU, LineItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cart: LineItem[] = [];

  addItem(selectedItem: SKU) {
    //iterate through the array and return item that follow through with the rule given
    const i = this.cart.find((item) => item.sku.itemId == selectedItem.itemId)
    
    if (i) {
      i.quantity++;
      
    } else {
      const newLineItem: LineItem = {
        quantity: 1,
        sku: selectedItem
      };

      this.cart.push(newLineItem);
    }
    console.log(this.cart);
  }
}
