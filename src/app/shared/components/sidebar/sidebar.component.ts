import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor( private gifsService: GifsService) {

  }

  // public list = this.gifsService.tagHistory;
  get tags(){
    return this.gifsService.tagHistory;
  }

  // hacer click y que llame el servicio con el metodo
  // este debe buscar con el gif



}
