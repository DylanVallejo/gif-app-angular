import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';




@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
  ]
})
export class GifsModule { }
