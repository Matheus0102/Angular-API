import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  font_size = 16;

  setFontSize(idd: string){
    if(idd === 'a+'){
      this.font_size += 1 ;
    } else if (idd === 'a-') {
      this.font_size -= 1;
    } else {
      this.font_size = 16;
    }

    let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("html")[0];
    if(htmlRoot != null) {
      htmlRoot.style.fontSize = `${this.font_size}px`;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
