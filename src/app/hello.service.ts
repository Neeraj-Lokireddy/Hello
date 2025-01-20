import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http:HttpClient) { }

  getTranslation(language:string):Observable<any>
  {
    return this.http.get("https://worldbackend-hzcgbsatbyebdtaf.canadacentral-01.azurewebsites.net/translate/?target_lang="+language)
  }

}
