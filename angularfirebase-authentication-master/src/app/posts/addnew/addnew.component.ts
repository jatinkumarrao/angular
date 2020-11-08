import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Item } from '../../shared/services/item'; 
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  item: Item = {
    title: '',
    description:'',
  
  }
  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.item.title != '' && this.item.description != ''){
      this.authService.addPost(this.item);
      this.item.title = '';
      this.item.description = '';
    }
  }
}
