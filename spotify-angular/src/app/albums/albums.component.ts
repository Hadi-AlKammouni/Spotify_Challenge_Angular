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

  constructor( private getAlbums: AlbumsService) { }

  ngOnInit(): void {
    this.album_id = localStorage.getItem("album-id")
    this.artist_name = localStorage.getItem("artist-name")
    this.token = localStorage.getItem("token")
    console.log(this.album_id)
    console.log(this.artist_name)
    console.log(this.token)
    this.getAlbums.getAlbums(this.album_id, this.token)
      .subscribe(response => {
        console.log(response)
      }, errorMessage => {
        this.error = errorMessage
      })
  }

}
