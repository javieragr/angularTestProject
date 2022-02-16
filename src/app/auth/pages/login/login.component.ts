import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent  {

  myForm : FormGroup= this.fb.group({
      email:['test@test.com',[Validators.required,Validators.email]],
      password:['123456',[Validators.required,Validators.minLength(6)]]

  })

  constructor(private fb:FormBuilder,
    private router:Router,
    private loginServices:LoginService
    ) { }
login(){
  
  const {email,password}= this.myForm.value;
  this.loginServices.login(email,password).subscribe(resp=>{
    if (resp) {
      //navigate to main screen
      //this.router.navigateByUrl('/mainScreen');//donot exist
    }else{
      console.log(resp);
      
     //error on login 
     
    }
  })

}
  

}
