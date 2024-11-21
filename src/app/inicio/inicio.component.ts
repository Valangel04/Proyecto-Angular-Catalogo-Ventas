import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  appName = AppConfig.appName;

  constructor() { }

  ngOnInit(): void {
    console.log(`Bienvenido a ${this.appName}`);
  }
}
