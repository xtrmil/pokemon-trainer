import { Component } from '@angular/core';
import { SessionService } from './services/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pokemon-trainer';
  constructor(private session: SessionService) { }

  status: boolean = true;

  clickEvent(){
    this.status = !this.status;
  }

  get username() {
    return this.session.get().username;
  }
}
