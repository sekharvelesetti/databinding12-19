import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  posts:any;
  url="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.posts=this.getData
    
  }
  getData(){
     return this.http.get(this.url).subscribe(data=>this.posts=data);
  }

}
