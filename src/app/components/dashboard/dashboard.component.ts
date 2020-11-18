import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private session: SessionService) { }

  ngOnInit(): void {
  }
get username() {
  return this.session.get().username;
}

}