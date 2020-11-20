import { Component } from '@angular/core';
import { TranslateService } from '../../node_modules/@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aerolinea';
  selectedLanguage = 'es';

  constructor(public translateService: TranslateService){
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage)
  }
  selectLanguage(lang: string) {
    this.translateService.use(lang);
  }
}