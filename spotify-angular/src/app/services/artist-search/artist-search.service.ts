import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { ArtistSearch } from 'src/app/models/artist-search.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistSearchService {

  constructor( private http: HttpClient ) { }

  findArtist(artist: string, token: any): Observable<ArtistSearch> {
    console.log(artist)
    return this.http.get<ArtistSearch>(`https://api.spotify.com/v1/search?q=artist%3A${artist}&type=artist`, {
      headers: new HttpHeaders()
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
    }).pipe(catchError(this.handleError))
  }

  private handleError() {
    let errorMessage = 'Something went wrong.'
    return throwError(errorMessage)
  }
  
}
