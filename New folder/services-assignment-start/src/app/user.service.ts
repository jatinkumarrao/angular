import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable()
export class UserService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
constructor(private count:CountService){
}
    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.count.incrementActiveToInactive();
      }
    
      onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.count.incrementInActiveToActive();
      }
    
}