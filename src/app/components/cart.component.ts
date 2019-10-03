import { Component, OnInit, Input } from '@angular/core';
import { LineItem } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() lineItems: LineItem;

  constructor() { }

  ngOnInit() {
  }

}
