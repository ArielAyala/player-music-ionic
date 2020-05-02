import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongsModalPageRoutingModule } from './songs-modal-routing.module';

import { SongsModalPage } from './songs-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongsModalPageRoutingModule
  ],
  declarations: [SongsModalPage]
})
export class SongsModalPageModule {}
