import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Password1Validator } from './password1.validator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  registrationForm = this.fb.group({
    userName:["sunilk",[Validators.required,Validators.minLength(4)]],
    password:[''],
    confirmPassword:['']

  },{validator:Password1Validator});
  
  get userName(){
    return this.registrationForm.get('userName');
  }
  // registrationForm = new FormGroup({
  //   userName : new FormControl("sunil"),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl('')
  // });

  loadApiData(){
    this.registrationForm.setValue({
      userName:"Kumar",
      password:"abcd",
      confirmPassword:"abcd"
    })
  }
  loadApiPatch(){
    this.registrationForm.patchValue({
      userName:"Kumar",
      password:"abcd"
    })
  }
}
