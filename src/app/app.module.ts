import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuarioComponent,
    CadastrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
