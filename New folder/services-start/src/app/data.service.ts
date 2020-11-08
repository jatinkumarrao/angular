import { Injectable,EventEmitter } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable()
export class DataService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      statusUpdated =new EventEmitter<string>();
 constructor(private login:LoginService){}
      onAccountAdded(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.login.logStatusChange(status)
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.login.logStatusChange(newStatus)
  }
}