import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { TopMenuComponent } from './components/header/top-menu/top-menu.component';
import { MainMenuComponent } from './components/header/main-menu/main-menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/product-list/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductListComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
