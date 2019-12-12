import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  people: any[] = [
    {
      "name": "sekhar",
      "age": 23
    },
    {
      "name": "suresh",
      "age": 24
    },
    {
      "name": "yugesh",
      "age": 55
    },
    {
      "name": "avinash",
      "age": 134
    },
    {
      "name": "loknath",
      "age": 3200
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
