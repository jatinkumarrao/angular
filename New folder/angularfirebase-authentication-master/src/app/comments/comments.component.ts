import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms'; 
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentForm: FormGroup;  // Define FormGroup to student's edit form
comeent={

}
  id:any = [];
comment=""
  constructor(
    private authService: AuthService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ) { }

  ngOnInit(): void {
    
    this.commentData();   // Call updateStudentData() as soon as the component is ready 
    const id = this.actRoute.snapshot.paramMap.get('id');
    comment{
    id=id
    comment=""
    }
    console.log(id)
    this.comment="";
    this.id=id; 
    // Getting current component's id or information using ActivatedRoute service
  //   this.authService.GetComment(id).valueChanges().subscribe(data => {
  //     this.commentForm.setValue(data)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
  //  console.log(data)
  //   })
  }
  get firstName() {
    return this. commentForm.get('id');
  }

  // Contains Reactive Form logic
  commentData() {
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(2)]],
      id:""
    })
  }

  // Go back to previous component
  goBack() {
    this.location.back();
  }
  onSubmit(form:NgForm ) { 
console.log(this.commentForm.value)
  //   this.authService.Comment(this.commentForm.value);       // Update student data using CRUD API
  //   this.toastr.success( ' Comment Post');   // Show succes message when data is successfully submited
  //   this.router.navigate(['posts']);    
  //   alert("Hello "  + JSON.stringify(this.commentForm.value));
  }
  // Below methods fire when somebody click on submit button
  // updateForm(){
  //   console.log(this.commentForm.value)
  //   this.authService.Comment(this.commentForm.value);       // Update student data using CRUD API
  //   this.toastr.success( ' Comment Post');   // Show succes message when data is successfully submited
  //   this.router.navigate(['posts']);               // Navigate to student's list page when student data is updated
  // }

}
