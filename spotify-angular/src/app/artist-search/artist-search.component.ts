import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor( private artistSearch: ArtistSearchService ) { }

  ngOnInit(): void {
  }

  searchForArtist(form: NgForm) {
    const artist = form.value.artist
    this.artistSearch.findArtist(artist)
  }

}
