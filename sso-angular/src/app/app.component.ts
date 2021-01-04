import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'single-sign-on';
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logIn() {
    const API_BASE_URL = 'http://localhost:8080';
    const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'
    const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
  }
}
