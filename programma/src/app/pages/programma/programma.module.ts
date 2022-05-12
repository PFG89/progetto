import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgrammaPageRoutingModule } from './programma-routing.module';

import { ProgrammaPage } from './programma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgrammaPageRoutingModule
  ],
  declarations: [ProgrammaPage]
})
export class ProgrammaPageModule {}
