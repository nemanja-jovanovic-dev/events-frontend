import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    MainComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        SharedModule,
        MatButtonModule
    ]
})
export class CoreModule { }
