import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-st';
  onPLCMenu:boolean=false;
  onStorageMenu: boolean=false;

  showPLCMenu() {
    this.onStorageMenu=false
    if(this.onPLCMenu==false)this.onPLCMenu=true
    else this.onPLCMenu=false
    console.log("click "+this.onPLCMenu)
  }

  showStorageMenu() {
    this.onPLCMenu=false
    if(this.onStorageMenu==false)this.onStorageMenu=true
    else this.onStorageMenu=false
  }
}
