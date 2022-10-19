import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { Albums } from 'src/app/models/artist-albums.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor( private http: HttpClient ) { }

  getAlbums(id: string | null, token: any | null): Observable<Albums> {
    return this.http.get<Albums>(`https://api.spotify.com/v1/artists/${id}/albums`, {
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
