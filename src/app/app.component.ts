import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/component/header/header.component';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private msalService: MsalService) {}

  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then((res) => {
      const account = res?.account ?? this.msalService.instance.getAllAccounts()[0];
      if (account) {
        this.msalService.instance.setActiveAccount(account);
      } else {
        this.msalService.loginRedirect(); // 👈 Auto login if not already logged in
      }
    });
  }
}
