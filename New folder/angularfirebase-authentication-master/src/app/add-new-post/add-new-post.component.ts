import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {
  public postForm: FormGroup;
  constructor( 
    public authService: AuthService,   
    public fb: FormBuilder,       
    public toastr: ToastrService  ) { }

  ngOnInit(): void {
    this.authService.GetPostsList();  
    this.posForm();              

  }
  // Reactive student form
 posForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['']
    })  
  }

  // Accessing form control using getters
  get title() {
    return this.postForm.get('title');
  }

  get description() {
    return this.postForm.get('description');
  }  


  // Reset student form's values
  ResetForm() {
    this.postForm.reset();
  }  
 
  submitPostData() {
    this.authService.AddPost(this.postForm.value); // Submit student data using CRUD API
    this.toastr.success(this.postForm.controls['title'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
   };

}
