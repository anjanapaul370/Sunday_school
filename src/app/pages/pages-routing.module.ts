import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { PagesComponent } from './pages.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'test',
        component: TestComponent,
      },
      {
        path: 'classes',
        component: ClassesComponent,
      },
      { path: '', redirectTo: 'test', pathMatch: 'full' },
      { path: '**', redirectTo: 'test' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
