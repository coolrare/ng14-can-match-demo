import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  betaUser() {
    localStorage.setItem('beta-user', '1');
    document.location.reload();
  }

  normalUser() {
    localStorage.removeItem('beta-user');
    document.location.reload();
  }
}
