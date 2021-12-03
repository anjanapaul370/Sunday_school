import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule } from '@nebular/auth';
import { FormsModule } from '@angular/forms';
import { NbMenuModule, NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbThemeModule, NbIconModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { NbFirebasePasswordStrategy } from '@nebular/firebase-auth';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent, ResetPasswordComponent, ForgotPasswordComponent],
  imports: [
        CommonModule,
        ThemeModule,
        NbThemeModule,
        AuthRoutingModule,
        NbAuthModule,
        NbAlertModule,
        FormsModule,
        NbInputModule,
        NbIconModule,
        NbButtonModule,
        NbCheckboxModule,
        NbCardModule,
        NbMenuModule
  ]
})
export class AuthModule {}
