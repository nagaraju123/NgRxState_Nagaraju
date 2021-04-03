import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpartnerComponent } from './partner/addpartner/addpartner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PartnerService } from './services/partner.service';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './State/reducer';

@NgModule({
  declarations: [
    AppComponent,
    AddpartnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,
    StoreModule.forRoot(AppReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   *
   */
  constructor(private service: PartnerService) {
    service.getAllPartners();
  }

}
