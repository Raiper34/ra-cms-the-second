import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import {RouterModule, Routes} from '@angular/router';
import {SignComponent} from './sign/sign.component';
import {PublicGuard} from './public.guard';

const publicRoutes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    canActivate: [PublicGuard],
    children: [
      { path: 'sign', component: SignComponent },
      { path: '', redirectTo: 'sign', pathMatch: 'full' },
      { path: '**', redirectTo: 'sign' },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      publicRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  declarations: [PublicComponent]
})
export class PublicModule { }
