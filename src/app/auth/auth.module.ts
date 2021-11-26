import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule } from '@nebular/auth';
import { FormsModule } from '@angular/forms';
import { NbMenuModule, NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbThemeModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
        CommonModule,
        ThemeModule,
        NbThemeModule,
        AuthRoutingModule,
        NbAuthModule,
        NbAlertModule,
        FormsModule,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule,
        NbCardModule,
        NbMenuModule,
      ],
})
export class AuthModule {}
