import { NovoCalculoComponent } from './novo-calculo/novo-calculo.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'resultado', pathMatch: 'full'},
  {path:'resultado', component: ResultadoComponent},
  {path: 'novo-calculo', component: NovoCalculoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}
