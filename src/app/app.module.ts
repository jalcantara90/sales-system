import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from '@ngneat/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    DialogModule.forRoot({
      sizes: {
        sm: {
          width: '300px',
          height: '250px'
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
