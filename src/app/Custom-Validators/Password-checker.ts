import { FormGroup } from "@angular/forms";

export var passwordChecker = (password: string, confirmPassword: string) => {

  return (formGroup: FormGroup) => {
    const Password = formGroup.controls[password];
    const Confpassword = formGroup.controls[confirmPassword];

    if (Password.value !== Confpassword.value) {
      Confpassword.setErrors({ mustMatch: true });
    } else {
      Confpassword.setErrors(null);
    }
  }
}
