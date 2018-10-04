import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// *Modules*
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// *Directives*
import { ScrollOnClickDirective } from 'src/app/common/directives/scroll-on-click/scroll-on-click.directive';
import { ImageLoaderDirective } from 'src/app/common/directives/image-loader/image-loader.directive';

// *Pipes*
import { SanitizeInputPipe } from 'src/app/common/pipes/sanitize-input/sanitize-input.pipe';

// *Public Page Components*
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from 'src/app/home/home.component';
import { EventsComponent } from 'src/app/events/events.component';
import { EventProfileComponent } from './event-profile/event-profile.component';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from 'src/app/user-profile/user-profile.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupProfileComponent } from './group-profile/group-profile.component';
import { GamesComponent } from 'src/app/games/games.component';
import { GameProfileComponent } from './game-profile/game-profile.component';

// *Secure Page Components*
import { ManagementComponent } from 'src/app/management/management.component';
import { UserProfileManagementComponent } from './user-profile-management/user-profile-management.component';

// *Common Components*
import { AppComponent } from 'src/app/app.component';
import { LoadingOverlayComponent } from 'src/app/common/components/loading-overlay/loading-overlay.component';
import { InfoMessagesComponent } from 'src/app/common/components/info-messages/info-messages.component';
import { PageHeaderComponent } from 'src/app/common/components/page-header/page-header.component';
import { PageFooterComponent } from 'src/app/common/components/page-footer/page-footer.component';
import { PortfolioItemComponent } from 'src/app/common/components/portfolio-item/portfolio-item.component';
import { PortfolioItemModalComponent } from 'src/app/common/components/portfolio-item-modal/portfolio-item-modal.component';
import { OfficerProfileComponent } from 'src/app/common/components/officer-profile/officer-profile.component';
import { OfficerProfileModalComponent } from 'src/app/common/components/officer-profile-modal/officer-profile-modal.component';
import { CountdownTimerComponent } from 'src/app/common/components/countdown-timer/countdown-timer.component';
import { FileUploadComponent } from 'src/app/common/components/file-upload/file-upload.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollOnClickDirective,
    ImageLoaderDirective,
    SanitizeInputPipe,
    PageHeaderComponent,
    PageFooterComponent,
    PortfolioItemComponent,
    PortfolioItemModalComponent,
    OfficerProfileComponent,
    OfficerProfileModalComponent,
    CountdownTimerComponent,
    GamesComponent,
    HomeComponent,
    EventsComponent,
    UserProfileComponent,
    ManagementComponent,
    LoadingOverlayComponent,
    FileUploadComponent,
    InfoMessagesComponent,
    GroupProfileComponent,
    ErrorComponent,
    UserProfileManagementComponent,
    GameProfileComponent,
    EventProfileComponent,
    UsersComponent,
    GroupsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [
    PortfolioItemModalComponent,
    OfficerProfileModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
