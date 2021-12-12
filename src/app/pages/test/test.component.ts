import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent extends NbLoginComponent {
  constructor(
    public router: Router,
    public service: NbAuthService,
    public cd: ChangeDetectorRef,
  ) {
    super(service, {}, cd, router);
  }

}
