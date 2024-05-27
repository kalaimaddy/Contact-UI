import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-admin-dashboard, [app-admin-dashboard]',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router, private _apiService:ApiServiceService){ } 

  //Lifecycle Hook, Page Initialization
  ngOnInit(){
    this.CreateContacts();
    // this.GetContacts();
  }

  //Get Contacts Method
  GetContacts(){
    debugger
    var Url = "Contacts/GetAllContacts";

    this._apiService.GetServiceByURL(Url).subscribe((resp:any) => {

      if(resp!=null && resp.status)
      {
          alert(resp.message);
          console.log(resp);
          this.router.navigate(['/admin']);
      }
      else
      {
        alert(resp.message);
      }
    }, error => {
      alert(error)
    });
  }

  //Create Contacts Methods
  CreateContacts(){
    debugger
    var Url = "Contacts/CreateContacts";
    var params = {
      Name : "Kalai",
      Email: "kalai@gmail.com",
      Phone: 996,
      Favorite: false

    };

    this._apiService.PostService(Url, params).subscribe((resp:any) => {

      if(resp!=null && resp.status)
      {
          alert(resp.message);
          console.log(resp);
          // this.router.navigate(['/admin']);
      }
      else
      {
        alert(resp.message);
      }
    }, error => {
      alert(error)
    });
  }
}
