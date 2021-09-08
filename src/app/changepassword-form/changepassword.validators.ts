import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ChangeValidators{

  static matches(control: AbstractControl): Promise<ValidationErrors | null>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value !='1234') resolve({matches: true})
        else resolve(null)
      },2000)
    })
  }

  static confirm(control: AbstractControl) : ValidationErrors | null{
    
    /* console.log('confirm');
     */
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');
    
    console.log('new: ',newPassword.value);
    console.log('confirm: ',confirmPassword.value);
    
    

    if(newPassword.value !== confirmPassword.value) {
      console.log('diverse');
      return {confirm : true}
    }
    else{
      console.log('uguali');
      return null
    }
    
  }


}