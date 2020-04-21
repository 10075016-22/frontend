import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { Employee } from 'src/app/Models/Employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  createForm: FormGroup;
  submitted = false;


  constructor(private http:HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required]
    })
  }

  onSubmit()
  {
    this.submitted = true;
    if(this.createForm.invalid)
    {
      console.log(this.createForm)
    }else{
      
      this.http.post("http://dummy.restapiexample.com/api/v1/create",this.createForm.value).subscribe(response => {
        console.log(response)
      },error =>{
        console.log(error)
      })
    }
  }
}
