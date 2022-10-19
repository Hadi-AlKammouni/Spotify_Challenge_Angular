import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( ) { }

  client_id: string = "8f059b9b27d0487885f7b5cf1781a62e"
  redirect_uri: string = 'http://localhost:4200/artist-search'
  state?: string
  scope: string = 'user-read-private user-read-email'
  url: string = 'https://accounts.spotify.com/authorize'
  length: number = 16

  ngOnInit(): void {
  }
    
  login() {
    this.state = this.generateRandomString(this.length);
    localStorage.setItem("stateKey", this.state);
    this.url += '?response_type=token';
    this.url += '&client_id=' + encodeURIComponent(this.client_id);
    this.url += '&scope=' + encodeURIComponent(this.scope);
    this.url += '&redirect_uri=' + encodeURIComponent(this.redirect_uri);
    this.url += '&state=' + encodeURIComponent(this.state);

    window.location.href= this.url
  }
  
  private generateRandomString(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var characters_length = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters_length));
    }
   return result;
  }
}