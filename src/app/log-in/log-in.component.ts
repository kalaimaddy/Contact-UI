import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDashboardComponent } from '../admins/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from '../users/user-dashboard/user-dashboard.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [AdminDashboardComponent, UserDashboardComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit {

  constructor(private router:Router, private _apiservice:ApiServiceService, private appcomp:AppComponent) 
  {
    // localStorage.getItem("user_role");
    //this.appcomp.sharedDataMethod();
  }

  userLoginForm:FormGroup | any;
  //params = [];
  // Url : string |any;
  // useremail : | any;
  // password : string | any;
  user_id:any;
  username:any;
  user_role:any;
  userEmail:any;

  
// userForm: FormGroup; 

  //@Output() public user_roletologinComp = new EventEmitter<string>();
  //@Input() ParentAPi !: any;

  ngOnInit(){
    this.userLoginForm = new FormGroup({
      'userEmail': new FormControl(null, [Validators.required,Validators.email]),
      'password': new FormControl(null, Validators.required),

    });
  }
    
  LoginSubmit(){
    debugger
    //alert('form submitted');
    const userEmail = this.userLoginForm.get('userEmail').value;
    const password = this.userLoginForm.get('password').value;

    var Url = "Login/LoginControl";
    var params = {
      userEmail: userEmail, 
      password : password
    };

    this._apiservice.PostService(Url, params).subscribe((resp:any) => {
      debugger
      if(resp.value.status == true)
      {
        this.user_id = resp.value.loginList[0].user_id;
        this.username = resp.value.loginList[0].username;
        this.user_role = resp.value.loginList[0].user_role;
        this.userEmail = resp.value.loginList[0].userEmail;

        localStorage.clear();
        
        localStorage.setItem("user_id", this.user_id);
        localStorage.setItem("username", this.username);
        localStorage.setItem("user_role", this.user_role);
        localStorage.setItem("userEmail", this.userEmail);
        
        //this.user_roletologinComp.emit(this.user_role); 
        //this.user_roletologinComp.emit(this.user_id);
        //this._dataservice.setSharedData(this.user_role);
        //this.appcomp.sharedDataMethod();
        
        alert('Login successful');
        if(this.user_role == 'Admin')
          this.router.navigate(['/admin']);
        else if(this.user_role == 'User')
          this.router.navigate(['/user']);
        else
          this.router.navigate(['/login']);
      }
      else
        alert('Error Occured, while Login')
          
      // this.alertService.success('Registration successful', true);
      // this.router.navigate(['/login']);
    },
    error => {
      alert(error);
      this.userLoginForm.reset();
    });
    
  }
  
}
