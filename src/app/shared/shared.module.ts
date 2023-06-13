import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsPoderosoPipe } from './pipes/es-poderoso.pipe';
import { HonorPipe } from './pipes/honor.pipe';



@NgModule({
  declarations: [
    EsPoderosoPipe,
    HonorPipe
  ],
  exports: [
    HonorPipe,
    EsPoderosoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
