import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  personModel = new Person("Sunil","sunil@gmail.com",7995039932);
  
  submitted = false;

  onSubmit(){
    console.log("form submitted");
    this.submitted = true;
    if (this.submitted == true){
        this.route.navigate(['/success'])
    }
  }
}
