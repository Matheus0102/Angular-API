import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './Telas/contato/contato.component';
import { HomeComponent } from './Telas/home/home.component';
import { LoginComponent } from './Telas/login/login.component';
import { ProdutosComponent } from './Telas/produtos/produtos.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'home', component: HomeComponent 
  },
  {
    path:'index', component: HomeComponent
  },
  {
    path:'produtos', component: ProdutosComponent
  },
  {
    path:'contato', component: ContatoComponent
  },
  {
    path:'login', component: LoginComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
