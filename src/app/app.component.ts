import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = 0;
  addFunction(){
    if(this.value < 10){
    this.value++;
  }
  }
  subtractFunction(){
    if(this.value > 0){
      this.value--;
    }
  }
  
}
