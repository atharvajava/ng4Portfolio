import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public check:any=true;
  constructor() { }

  ngOnInit() {
  }

  toggle=()=>{
    $("#wrapper").toggleClass("toggled");
    this.check=false;
  };
  toggleLeave=()=>{
     $("#wrapper").toggleClass("toggled");
      $("#wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",()=>{
        this.check=true
      });       
    }

}
