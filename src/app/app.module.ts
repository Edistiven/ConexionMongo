import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {HttpClientModule} from '@angular/common/http'; asi se llama ahora

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
// se importa los nuevos componentes
import { appRoutes } from './routerConfig';
import { CoinService } from './coin.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    // se importa el router
    RouterModule.forRoot(appRoutes),
    FormsModule, ReactiveFormsModule,
    HttpModule
],
 // crear servicios ng g service coin
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
