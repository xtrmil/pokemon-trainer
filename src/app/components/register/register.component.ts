import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  isLoading: boolean = false;
 
  constructor(private session: SessionService, private router: Router) {

    if (this.session.get() !== false) {
      this.router.navigateByUrl('/catalogue');
    }
  }

  ngOnInit(): void {
    localStorage.clear();   // removes leftover pokemons if pt-session has been removed.
  }

  get username() {
    return this.registerForm.get('username');
  }

  onRegisterClicked() {
    const result: any = this.registerForm.value;
    this.session.save({
      username: result.username
    });
    this.router.navigateByUrl('/catalogue');
  }
}
