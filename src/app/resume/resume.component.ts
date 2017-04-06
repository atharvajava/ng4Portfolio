import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
    public check:any=true;
    public edu:any=false;
    public exp:any=false;
    public loc:any=false;
    public con:any=false;

  constructor() { }

  ngOnInit() {
  }

  per=()=>{
    $(".personalDeails").toggleClass("toggled");
    this.edu=false;
    this.exp=false;
    this.loc=false;
    this.con=false;
    this.check=true;
  };
  eduD=()=>{
     $(".educationalProfile").toggleClass("toggled");
    this.exp=false;
    this.loc=false;
    this.con=false;
    this.check=false;
    this.edu=true;
      console.log(this.edu);
    }
    expD=()=>{
    this.loc=false;
    this.con=false;
    this.check=false;
    this.edu=false;
    this.exp=true;
  }
  pLoc=()=>{
    this.con=false;
    this.check=false;
    this.edu=false;
    this.exp=false;
     this.loc=true;
  }
  conM=()=>{
    this.check=false;
    this.edu=false;
    this.exp=false;
     this.loc=false;
      this.con=true;
  }
}
