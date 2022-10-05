import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from './accounts.service';
import { AuthService } from './auth.service';
import { CustomerModel } from '../customers/customers.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  errorMessage: string = "";
  
 account : CustomerModel = {
   id: 0,
   username: '',
   password: '',
   email:'',
   firstname: '',
   lastname: '',
   image:''
 }
 

  constructor(private accountService: AccountsService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    
    this.accountService.validate(this.account).subscribe((response) => {
      console.log(response);
      this.account = response;
    })
    console.log(this.account);
    if(this.account.id !=0){
      
        this.authService.isLoggedIn = true;

      
      this.router.navigate(["."]);
    }else{
      
      this.errorMessage = 'Invalid username/password';
      
    }
    

}

getId(){
  console.log(this.account);
  return this.account.id;
}

}
