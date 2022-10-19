import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistSearchService {

  constructor() { }

  findArtist(artist: string) {
    console.log(artist)
  }
}
