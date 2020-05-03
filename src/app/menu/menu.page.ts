import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navController: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menu.close();
  }

  logout() {
    this.storage.remove('isUserLoggedIn')
    this.navController.navigateRoot('login');
  }

  goToSettings() {
    this.navController.navigateRoot('menu/settings');
    this.menu.close();
  }

}
