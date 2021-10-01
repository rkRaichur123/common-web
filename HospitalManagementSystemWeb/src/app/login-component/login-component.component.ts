import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  public selectedUser!: String;
  constructor() { }
  
  ngOnInit(): void {
  }

userType(event: any){
     
 let doctor = <HTMLInputElement>document.getElementById("doctor");
let patient = <HTMLInputElement>document.getElementById("patient");
if (doctor.checked) {
  patient.disabled=true;
}
else{
  patient.disabled=false;
}
if(patient.checked) {
doctor.disabled=true;
}else{
  doctor.disabled=false;
}
var target = event.target || event.srcElement || event.currentTarget;
     var idAttr = target.attributes.id;
     var value = idAttr.nodeValue;
     this.selectedUser=value;

  }
  userLogon(){
   if(this.selectedUser===undefined){
     alert("Select either Doctor or Patient");
   }
  }
}



