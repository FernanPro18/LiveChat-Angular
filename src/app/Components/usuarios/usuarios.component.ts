import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  height: string;

  constructor() { }

  ngOnInit() {
    this.height = $(window).height() + 'px';
  }

}