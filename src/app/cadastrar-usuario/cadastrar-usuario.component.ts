import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm  } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user'
@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  user = new User();
  form: FormGroup;
  id: number;
  totalAngularPackages: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.Init();
  }

  private Init(){
    let obj = {}
    Object.keys(this.user).forEach( x => {obj[x] = new FormControl()} )
    this.form = new FormGroup(obj);

    if(!this.user.id){
      this.user.maritalStatus = 1;
      this.user.gender = "F";
    }

  }
  
  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'))
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
        this.totalAngularPackages = data.total;
    }) 
  }

  onSubmit() {
    console.log(this.form.value);  // valores do formulario
    console.log(this.form.valid);  // formulario é valido não
  }
  
  get teste(){ return JSON.stringify(this.user); }
  get testeApi(){ return JSON.stringify(this.totalAngularPackages); }

}
