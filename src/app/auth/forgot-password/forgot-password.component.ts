import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbAuthService, NbRequestPasswordComponent } from '@nebular/auth';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends NbRequestPasswordComponent {
  constructor(service: NbAuthService, cd: ChangeDetectorRef, router: Router){
    super(service,{}, cd, router)
  }
  request(form: NgForm){
    
  }
}
