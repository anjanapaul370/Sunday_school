import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbRegisterComponent } from '@nebular/auth';
import { AuthService } from '../auth.service';
//import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbRegisterComponent {
  private authService: AuthService
    

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
    console.log(form.value.email)
  }
}

