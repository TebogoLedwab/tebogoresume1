import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'tebogoresume';

  constructor (
    // private userService: UserService,
    // private storeService: StoreService
  ) {

  }
  ngOnInit (): void {

  }

  scrollTo (to: string) {
    switch (to) {
      case 'p-details':
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;
  
      case 'profile':
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;
  
      default:
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;
    }
  }
}

