import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ImageLoaderDirective } from 'src/app/_common/directives/image-loader/image-loader.directive';
import { AuthService } from 'src/app/_common/services/auth/auth.service';
import { UserService } from 'src/app/_common/services/user/user.service';
import { GameService } from 'src/app/_common/services/game/game.service';
import { FileUploadComponent } from 'src/app/_common/components/file-upload/file-upload.component';
import { InfoMessagesComponent } from 'src/app/_common/components/info-messages/info-messages.component';
import { User } from 'src/app/_common/models/user';
import { Group } from 'src/app/_common/models/group';
import { Game } from 'src/app/_common/models/game';
import { Portfolio } from 'src/app/_common/models/portfolio';

@Component({
  selector: 'ksu-gdc-user-profile-management',
  templateUrl: './user-profile-management.component.html',
  styleUrls: ['./user-profile-management.component.scss']
})
export class UserProfileManagementComponent implements OnInit {
  @ViewChild('profileUpdateMessages') profileUpdateMessages: InfoMessagesComponent;
  @ViewChild('gamesUpdateMessages') gamesUpdateMessages: InfoMessagesComponent;
  @ViewChild('infoForm') infoForm: NgForm;
  @ViewChild(FileUploadComponent) profileImageUploader: FileUploadComponent;
  @ViewChild(ImageLoaderDirective) profileImage: ImageLoaderDirective;

  isValidated: boolean;
  user: User;

  groups: Group[];
  portfolio: Portfolio = new Portfolio();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.authService.validateCASTicket(this.router.url, this.route.snapshot.queryParams['ticket'])
      .then(user => {
        this.user = user;
        this.isValidated = true;
        this.userService.getGames(user.userId)
          .then(games => this.portfolio.games = games);
        this.userService.getGroups(user.userId)
          .then(groups => this.groups = groups);
      })
      .catch(error => {
        this.authService.loginWithCAS(this.router.url);
      });
  }

  uploadProfileImage(image: File): void {
    this.profileImageUploader.isProcessing = true;
    this.userService.updateProfileImage(this.user.userId, image)
      .then(() => {
        this.profileUpdateMessages.showSuccess('Your profile image has been updated.');
        this.profileImageUploader.isProcessing = false;
        this.profileImage.reload();
      })
      .catch(error => this.profileUpdateMessages.showError('There was a problem updating your profile picture.'));
  }

  updateUserInfo(): void {
    this.userService.updateUser(this.user)
      .then(() => {
        this.infoForm.form.markAsPristine();
        this.infoForm.form.markAsUntouched();
        this.profileUpdateMessages.showSuccess('Your info has been updated.');
      })
      .catch(error => {
        this.profileUpdateMessages.showError('There was a problem updating your info.');
      });
  }

  logoutUser(): void {
    this.authService.logoutWithCAS('');
  }

  openGroupsModal(): void {

  }

  openGamesModal(): void {

  }
}
