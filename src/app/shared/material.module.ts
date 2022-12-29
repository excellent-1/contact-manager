// TYPESCRIPT: Only Import in Typescript the different Material Modules
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // 12/28/2022 @9:40pm
import { MatIconModule } from '@angular/material/icon'; // 12/28/2022 @9:44pm
import { MatCheckboxModule } from '@angular/material/checkbox'; // @10:05pm

// ANGULAR: Here we will Only Export Our Modules in MatButtonModule, MatIconModule, MatCheckboxModule
@NgModule({
  declarations: [],
  imports: [ // NONE
  ],
  exports: [
    MatButtonModule, MatIconModule, MatCheckboxModule
  ]
})
export class MaterialModule { } 
//TYPESCRIPT & ANGULAR: In app.module.ts this whole MaterialModule Class will be imported
