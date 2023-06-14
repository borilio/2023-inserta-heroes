import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsPoderosoPipe } from './pipes/es-poderoso.pipe';
import { HonorPipe } from './pipes/honor.pipe';
import { HttpClientModule } from "@angular/common/http";


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
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
