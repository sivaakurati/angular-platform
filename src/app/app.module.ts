import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AuthGuard } from './helpers/auth.guard';

import { AlertService } from './services/alert.service';
import { AccountService } from './services/account.service';

import { AppComponent } from './app.component';

const accountModule = () =>
  import('./account/account.module').then((x) => x.AccountModule);

const consoleModule = () =>
  import('./console/console.module').then((x) => x.ConsoleModule);

const routes: Routes = [
  { path: '', loadChildren: consoleModule, canActivate: [] },
  { path: 'account', loadChildren: accountModule },
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AlertService,
    AccountService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
