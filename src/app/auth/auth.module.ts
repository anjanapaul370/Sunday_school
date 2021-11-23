import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { FormsModule } from '@angular/forms';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
        CommonModule,
        ThemeModule,
        AuthRoutingModule,
        NbAuthModule,
        NbAlertModule,
        FormsModule,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule
      ],
})
export class AuthModule {}
