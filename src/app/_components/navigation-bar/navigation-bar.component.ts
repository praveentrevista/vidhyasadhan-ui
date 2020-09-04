import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthserviceService } from 'src/app/_services/authservice.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  user: User;
  checked = false;
  navClicked = true;
  smClicked = false;
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(public authService: AuthserviceService) { }

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  logout() {
    this.authService.logout();
  }

  menuClicked(){
    this.toggleSidenav.emit();
    this.navClicked = !this.navClicked;
  }

  smallmenuClicked(){
    this.smClicked = !this.smClicked;
  }

}
