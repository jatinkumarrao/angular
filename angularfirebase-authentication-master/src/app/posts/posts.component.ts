import { Component, OnInit } from '@angular/core';
import{Item} from '../../app/shared/services/item'
import { AuthService } from "../shared/services/auth.service";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
items:Item[];
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
this.authService.getItems().subscribe(items=>{
  //this.items=items
  console.log(items)
})
  }

}
