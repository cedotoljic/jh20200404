import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jh20200404SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jh20200404SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Jh20200404HomeModule {}
