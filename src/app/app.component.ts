import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'sidebar';
  status =true;
sekhars=[{name:"sekhar",price:220,count:1}]
nam='';
price:number;
count:number;

 myapp(){

  //  this.status =!this.status;
   this.sekhars.push({name:this.nam,price:this.price,count:this.count})
   
  

  //  if(this.status===false){
  //    this.status=true
  //  }else{
  //    this.status=false
  //  }

 }

 remove(){
   this.sekhars.splice(1,1)
 }

}
