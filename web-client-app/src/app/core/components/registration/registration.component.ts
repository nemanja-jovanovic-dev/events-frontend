import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import * as CoreActions from '../../../store/core.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  firstNameFormControl = new FormControl('', Validators.required);
  lastNameFormControl = new FormControl('', Validators.required);
  emailFormControl = new FormControl('', Validators.required);
  phoneNumberFormControl = new FormControl('', Validators.required);
  addressFormControl = new FormControl('', Validators.required);
  cityFormControl = new FormControl('', Validators.required);

  constructor(private dialog: MatDialog, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstNameFormControl: this.firstNameFormControl,
      lastNameFormControl: this.lastNameFormControl,
      emailFormControl: this.emailFormControl,
      phoneNumberFormControl: this.phoneNumberFormControl,
      addressFormControl: this.addressFormControl,
      cityFormControl: this.cityFormControl,
    });
  }

  onSubmit(): void {

    this.store.dispatch(CoreActions.showMessage({message: 'Action works!'}));
    if (this.form.invalid) {
      console.log('Invalid form');
    }
    console.log('Submitted form value: ', this.form.value);
  }

  onClose(): void {
    this.dialog.closeAll();
  }
}
