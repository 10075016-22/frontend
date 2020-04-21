import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  constructor(private api : ApiService){}

  employee : Employee[] = [];

  ngOnInit()
  {
    this.api.getEmployees().subscribe(
      response => {
        this.employee = response.data;
        
      }, error =>{
        console.log(error)
      }
    )
  }

}
