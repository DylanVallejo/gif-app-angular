import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'gifs-search-box',
    // templateUrl:
  template:`
  <h5>Buscar:</h5>
    <!-- se utiliza referencia local par ano acceder al forms module -->

  <input
    type="text"
    class="form-control"
    placeholder="Buscar gifs.."
    (keyup.enter)="searchTag( )"
    #txtTagInput
  />
  `
})
export class SearchBoxComponent {

  @ViewChild( 'txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;


  constructor( private GifsService: GifsService) {

  }
  // searchTag(newTag:string){
  searchTag( ){
    const newTag = this.tagInput.nativeElement.value;
    this.GifsService.searchTag(newTag);
    // console.log({newTag});
    this.tagInput.nativeElement.value = ""
  }
}
