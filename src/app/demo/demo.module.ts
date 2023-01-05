import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { FlexboxComponent } from './flexbox/flexbox.component';

@NgModule({
  declarations: [
    ButtonsComponent, 
    //FlexboxComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule, FormsModule,
  ]
})
export class DemoModule { }
