import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
