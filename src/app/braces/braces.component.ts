import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-braces',
  templateUrl: './braces.component.html',
  styleUrls: ['./braces.component.css']
})
export class BracesComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {  let dynamicScript = document.createElement("script");
  dynamicScript.type = "text/javascript";
  dynamicScript.async = true;
  dynamicScript.src = "https://cdn2.woxo.tech/a.js#62c01a09fbe6f799a42fc740";
  document.body.appendChild(dynamicScript);
  }
  navbarOpen = false;
  status: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }

}
