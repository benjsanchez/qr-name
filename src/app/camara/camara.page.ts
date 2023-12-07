import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor(public router:Router, public nav:NavController) { }

  submitForm=()=>{
    this.nav.navigateForward("alumno")
  }
  
  ngOnInit() {
  }

}
