import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-demo';

  constructor(private oauthService: OAuthService) {
    // this.oauthService.redirectUri = window.location.origin;
    // this.oauthService.clientId = '0oa2g267j9pyqk0ei357';
    // this.oauthService.scope = 'openid profile email';
    // this.oauthService.issuer = 'https://dev-503311.okta.com/oauth2/default';
    this.oauthService.redirectUri = 'http://localhost:4200/home';
    this.oauthService.clientId = '8c7e8a8d-b320-4993-a4e5-a07efe13c48e';
    this.oauthService.scope = 'openid profile email';
    this.oauthService.issuer = 'https://angular.com';
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
