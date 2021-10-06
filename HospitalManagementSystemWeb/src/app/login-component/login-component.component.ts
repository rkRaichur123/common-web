import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  public selectedUser!: String;
  loginForm!: FormGroup;
  public doctorVal!:String;
  public patientVal!:string;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      userPwd: ['', Validators.required]
    });
  }
  userType(event: any) {

    let doctor = <HTMLInputElement>document.getElementById("doctor");
    let patient = <HTMLInputElement>document.getElementById("patient");
    if (doctor.checked) {
      patient.disabled = true;
      var target = event.target || event.srcElement || event.currentTarget;
      var idAttr = target.attributes.id;
      this.doctorVal=idAttr;
      var tempuser = idAttr.value;
      this.doctorVal=tempuser;
    }
    else {
      patient.disabled = false;
      this.doctorVal = "";
    }
    if (patient.checked) {
      doctor.disabled = true;
      var target = event.target || event.srcElement || event.currentTarget;
      var idAttr = target.attributes.id;
      this.doctorVal=idAttr;
      var tempuser = idAttr.value;
      this.patientVal=tempuser;
    } else {
      doctor.disabled = false;
      this.patientVal = "";
    }

  }
  userLogon() {
    if ((this.doctorVal === undefined || this.doctorVal === "" )&&( this.patientVal === undefined || this.patientVal === "")) {
      alert("Select either Doctor or Patient");
    }else{
      alert("comdition met");
    }
  }
}



function forbiddenNameValidator(arg0: RegExp): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

