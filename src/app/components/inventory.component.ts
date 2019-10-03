import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SKU, INVENTORY } from '../models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  //prevent INVENTORY data from being modified. thus set to readonly
  readonly inventory = INVENTORY;

  @Output()
  onNewItem = new EventEmitter<SKU>();

  constructor() { }

  ngOnInit() {
  }

  selectItem(id, idx) {
    console.log(id);
    this.onNewItem.next(this.inventory[idx]);
  }
}
