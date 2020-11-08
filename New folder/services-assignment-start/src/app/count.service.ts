export class CountService{
    activeToInactiveCounter =0;
    InactiveToactiveCounter =0;

incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
}
incrementInActiveToActive(){
    this.InactiveToactiveCounter++;
    console.log(this.InactiveToactiveCounter)
}
}