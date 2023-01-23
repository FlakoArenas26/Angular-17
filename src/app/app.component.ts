import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.titulo { color:red; font-size:2rem }',
           '.parrafo {color:black; font-size:1.1rem }']
})
export class AppComponent {
  tit = 'Prueba de inline-style';
}