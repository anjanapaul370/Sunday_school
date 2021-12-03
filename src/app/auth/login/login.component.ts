import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbLoginComponent } from '@nebular/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends NbLoginComponent {
private authService: AuthService;
onSubmit(form: NgForm) {
  this.authService.login({
    email: form.value.email,
    password: form.value.password

  });
  console.log(form.value.email)
}

}
