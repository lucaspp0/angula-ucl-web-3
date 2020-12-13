import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  { path: '*', component: ListarUsuarioComponent },
  { path: '',  component: ListarUsuarioComponent },
  { path: 'listar',     component: ListarUsuarioComponent },
  { path: 'cadastrar',  component: CadastrarUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
