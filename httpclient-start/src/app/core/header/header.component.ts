import { Component } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) {
  }

  onSaveData() {
    /*this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );*/
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpEvent<any>) => {
          // console.log(response.type === HttpEventType.Sent);
          // console.log(response.type === HttpEventType.Response);
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
