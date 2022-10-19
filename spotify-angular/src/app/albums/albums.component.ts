import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  album_id?: string | null
  artist_name?: string | null

  constructor() { }

  ngOnInit(): void {
    this.album_id = localStorage.getItem("album-id")
    this.artist_name = localStorage.getItem("artist-name")
    console.log(this.album_id)
    console.log(this.artist_name)

  }

}
