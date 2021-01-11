import { NullTemplateVisitor } from "@angular/compiler";
import { AbstractControl } from "@angular/forms";

export function Password1Validator(control:AbstractControl):{[key:string]:boolean}|null{
    const password = control.get('password');
    const cpassword  = control.get('confirmPassword');
    if (password.pristine || cpassword.pristine){
        return null;
    }
    return password && cpassword && password.value !== cpassword.value ? {'misMatch':true}:null;
}