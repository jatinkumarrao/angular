import { Component, EventEmitter, Input, Output } from '@angular/core';
import{LoginService} from '../login.service'
import { DataService } from '../data.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private login:LoginService,private data:DataService){}

  onSetTo(status: string) {
    this.data.onStatusChanged(this.id,status);
    this.data.statusUpdated.emit(status)
   // this.statusChanged.emit({id: this.id, newStatus: status});
   // this.login.logStatusChange(status)
    //console.log('A server status changed, new status: ' + status);
  }
}
