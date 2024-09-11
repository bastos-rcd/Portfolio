import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public i18n: any = {};

  private actualLang: string = 'en';

  constructor(
    private http: HttpClient
  ) {
    this.updateI18n(this.actualLang);
  }

  private updateI18n(language: string) {
    this.http.get(`/assets/i18n/${language}.json`).subscribe(data => {
      this.i18n = data;
    });
  }

  public handleButtonClick() {
    this.actualLang = this.actualLang === 'fr' ? 'en' : 'fr';
    this.updateI18n(this.actualLang);
  }
}