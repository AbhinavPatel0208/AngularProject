import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  
export class AppComponent {
  title = 'AngularProject';
  someValue: string = "";
  someValues:Array<string>=new Array<string>();
  CallSomeLogic() { 
    this.someValues.push(this.someValue);
    this.someValue = "";
  }
}
