import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../login.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
 // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
constructor(private login:LoginService,private data:DataService){
  this.data.statusUpdated.subscribe(
    (status:string)=>alert('New status ' + status)
  );
}
  // onCreateAccount(accountName: string, accountStatus: string) {
  //   this.accountAdded.emit({
  //     name: accountName,
  //     status: accountStatus
  //   });
  onCreateAccount(accountName: string, accountStatus: string) {
    this.data.onAccountAdded(accountName,accountStatus)
   // this.login.logStatusChange(accountStatus)
   // console.log('A server status changed, new status: ' + accountStatus);
  }
}
