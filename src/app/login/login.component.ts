import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoMessagesComponent } from 'src/app/_common/components/info-messages/info-messages.component';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/_common/services/storage/storage.service';
import { UtilityService } from 'src/app/_common/services/utility/utility.service';
import { AuthService } from 'src/app/_common/services/auth/auth.service';

@Component({
  selector: 'ksu-gdc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginResponseMessages') loginResponseMessages: InfoMessagesComponent;

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const redirectUrl = this.route.snapshot.queryParams['r'] || '';
    this.storageService.setSessionStorageItem('ksu-gdc-login-redirect', redirectUrl);
    this.authService.loginCAS();
  }
}
