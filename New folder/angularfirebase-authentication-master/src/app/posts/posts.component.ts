import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';    // CRUD services API
import { Post } from './../shared/services/post';   // Student interface class for Data types.
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  p: number = 1;                      // Fix for AOT compilation error for NGX pagination
  Post: Post[];                 // Save students data in Student's array.
  hideWhenNoPost: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)
  
  constructor(
    public AuthService: AuthService, // Inject student CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
  ) { }

  ngOnInit(): void {
    this.dataState(); // Initialize student's list, when component is ready
    let s = this.AuthService.GetPostsList(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Post = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Post.push(a as Post);
      })
    })
  }
  dataState() {     
    this.AuthService.GetPostsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoPost = false;
        this.noData = true;
      } else {
        this.hideWhenNoPost = true;
        this.noData = false;
      }
    })
  }

  // Method to delete student object
  deletePost(post) {
    if (window.confirm('Are sure you want to delete this post ?')) {
      this.AuthService.DeletePost(post.$key) 
      this.toastr.success(post.title + ' successfully deleted!'); 
       }
  }

}
