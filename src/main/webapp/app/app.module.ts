import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jh20200404SharedModule } from 'app/shared/shared.module';
import { Jh20200404CoreModule } from 'app/core/core.module';
import { Jh20200404AppRoutingModule } from './app-routing.module';
import { Jh20200404HomeModule } from './home/home.module';
import { Jh20200404EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jh20200404SharedModule,
    Jh20200404CoreModule,
    Jh20200404HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jh20200404EntityModule,
    Jh20200404AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Jh20200404AppModule {}
