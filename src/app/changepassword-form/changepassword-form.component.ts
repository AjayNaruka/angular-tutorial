import { ChangeValidators } from './changepassword.validators';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component} from '@angular/core';

@Component({
  selector: 'changepassword-form',
  templateUrl: './changepassword-form.component.html',
  styleUrls: ['./changepassword-form.component.css']
})
export class ChangepasswordFormComponent {

  form = new FormGroup({
    'oldPassword': new FormControl('', [Validators.required], ChangeValidators.matches),
    'newPassword': new FormControl('', [Validators.required]),
    'confirmPassword': new FormControl('', [Validators.required]),
  },[ChangeValidators.confirm])
  
  form2: FormGroup

  constructor(fb: FormBuilder){
    this.form2 = fb.group({
      oldPassword: ['', Validators.required, ChangeValidators.matches],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {validator: ChangeValidators.confirm})
  }

  get oldPassword(){
    return this.form.get('oldPassword')
  }
  get newPassword(){
    return this.form.get('newPassword')
  }
  get confirmPassword(){
    return this.form.get('confirmPassword')
  }

}
