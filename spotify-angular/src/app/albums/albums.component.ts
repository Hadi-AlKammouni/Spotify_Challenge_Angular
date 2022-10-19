import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  album_id?: string | null
  artist_name?: string | null
  token?: string | null
  error = ''
  albums?: any

  constructor( private getAlbums: AlbumsService) { }

  ngOnInit(): void {
    this.album_id = localStorage.getItem("album-id")
    this.artist_name = localStorage.getItem("artist-name")
    this.token = localStorage.getItem("token")
    console.log(this.album_id)
    console.log(this.artist_name)
    console.log(this.token)

    this.getArtistAlbums(this.album_id, this.token)
  }

  private getArtistAlbums (album_id: string | null, token: string | null) {
    this.getAlbums.getAlbums(album_id, token)
      .subscribe(response => {
        this.albums = response.items
        console.log(response)
      }, errorMessage => {
        this.error = errorMessage
      })
  }

}
