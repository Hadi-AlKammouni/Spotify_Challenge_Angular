import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { ArtistSearchService } from '../services/artist-search/artist-search.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {

  search_icon = faMagnifyingGlass
  artist?: string
  access_token?: any
  error = ''
  artists?: any
  isArtist = false

  constructor( private artistSearch: ArtistSearchService, private router: Router ) { }

  ngOnInit(): void {
    if(window.location.hash) {
      const object = this.getReturnedParams(window.location.hash)
      this.access_token = object.access_token
      localStorage.setItem("token", this.access_token)
    }
  }

  searchForArtist(form: NgForm) {
    const artist = form.value.artist
    this.artistSearch.findArtist(artist, this.access_token)
      .subscribe(response => {
        this.artists = response.artists.items
        this.isArtist = true
      }, errorMessage => {
        this.error = errorMessage
    })
  }

  private getReturnedParams(hash: string) {
    const string_after = hash.substring(1)
    const params_in_url = string_after.split("&")
    const paramsSplit = params_in_url.reduce((accumulater:any, current_value) => {
        const [key, value] = current_value.split("=")
        accumulater[key] = value
        return accumulater
    }, {} )
    return paramsSplit
  }

  viewAlbum(id: string, name: string){
    localStorage.setItem("album-id", id)
    localStorage.setItem("artist-name", name)
    this.router.navigate(['/albums'])
  }
}
