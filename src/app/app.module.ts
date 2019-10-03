import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart.component';
import { InventoryComponent } from './components/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
