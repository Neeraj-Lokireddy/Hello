import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card'; // Import CardModule, NOT Card
import { DropdownModule } from 'primeng/dropdown';
import {FormsModule}   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HelloService } from './hello.service';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardModule, DropdownModule,FormsModule, CommonModule, ButtonModule, HttpClientModule],
  providers:[HelloService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  selectedLanguage:string="";
  languages:any[] = [
    { language_code: "en", language: "English" },
  { language_code: "es", language: "Spanish" },
  { language_code: "fr", language: "French" },
  { language_code: "de", language: "German" },
  { language_code: "it", language: "Italian" },
  { language_code: "pt", language: "Portuguese" },
  { language_code: "ru", language: "Russian" },
  { language_code: "zh-cn", language: "Chinese (Simplified)" },
  { language_code: "ar", language: "Arabic" },
  { language_code: "ja", language: "Japanese" },
  { language_code: "ko", language: "Korean" }
  ];

constructor(private helloservice:HelloService){}


getData()
{
  console.log(this.selectedLanguage);
  this.helloservice.getTranslation(this.selectedLanguage).subscribe((response:any)=>{
    console.log(response)
    this.title=response.trans;
  })
}
}
