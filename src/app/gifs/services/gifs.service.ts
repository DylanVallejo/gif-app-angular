import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';




@Injectable({providedIn: 'root'})
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory : string[] = [];
  private apiKey :string = 'eODCkVFDjx6hRHiNiZZQXpXrkEeEcgkc';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  constructor( private http:HttpClient) { }

  get tagHistory(){
    return [...this._tagsHistory]
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag)=> oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagHistory.splice(0,10);
  }

  searchTag(tag:string):void{
    if(tag.length === 0) return;
    this.organizeHistory(tag);
    // fetch(`http://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=2`)
    // .then( res => res.json())
    // .then( data => console.log(data));
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '4')
    .set('q', tag)


    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})//se puede enviar headers
    .subscribe( res => {
      this.gifList= res.data;
    } );

  }

}
