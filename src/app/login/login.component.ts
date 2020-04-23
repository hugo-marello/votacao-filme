import { Component, OnInit } from '@angular/core';
import { LoginGuard } from './login.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nome: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
  }

  onClick() {
     if(this.nome && this.nome.length > 0){
        var cookieDate = new Date;
        cookieDate.setFullYear(cookieDate.getFullYear() +1);
        document.cookie = `${LoginGuard.COOKIE}=${this.nome}; expires=${cookieDate.toUTCString()}`;
        this.router.navigate(['/vote']);
     }
  }
}