import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  apiGithub: any;
  apiFaceBook: any;
  apiGoogle: any;
  sso: any;

  constructor() {
     const API_BASE_URL = 'http://localhost:8080';
     const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';

     const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
     const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
     const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
     this.apiGithub = GITHUB_AUTH_URL;
     this.apiFaceBook = FACEBOOK_AUTH_URL;
     this.apiGoogle = GOOGLE_AUTH_URL;
     this.sso = 'http://localhost:8080';
  }

  ngOnInit(): void {
  }

}
