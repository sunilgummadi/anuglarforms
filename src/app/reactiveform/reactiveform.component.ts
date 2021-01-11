import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Password1Validator } from './password1.validator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
  }

  registrationForm = this.fb.group({
    userName:["sunilk",[Validators.required,Validators.minLength(4)]],
    password:[''],
    confirmPassword:[''],
    email:['',[Validators.required,Validators.email]],
    alternateEmails:this.fb.array([])

  },{validator:Password1Validator});
  
  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
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

    onSubmit(){
      console.log("form submitted");
      this.route.navigate(['/success']);
  }
}

