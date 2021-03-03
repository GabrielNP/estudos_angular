import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [ HomeComponent, SignInComponent, SignUpComponent ],
    imports: [ 
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        RouterModule,
        VMessageModule
    ]
})
export class HomeModule { }
