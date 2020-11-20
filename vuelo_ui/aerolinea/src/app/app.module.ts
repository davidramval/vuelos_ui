import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { VueloComponent } from './vuelo/vuelo.component';
import { vueloDetailComponent } from './vueloDetail/vueloDetail.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


const routes:Route[] = [
  {path:'', component: VueloComponent},
  {path:'vueloDetail', component: vueloDetailComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    VueloComponent,
    vueloDetailComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }