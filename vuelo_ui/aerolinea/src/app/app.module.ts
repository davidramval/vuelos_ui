import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VueloComponent } from './vuelo/vuelo.component';
import { FormComponent } from './form/form.component';


const routes:Route[] = [
  {path:'', component:VueloComponent},
  {path:'form', component:FormComponent},
  {path:'form', component:FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    VueloComponent,
    FormComponent  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
