import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserTableComponent } from './component/user-table/user-table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserFormComponent,
    UserTableComponent,
  ],
  imports: [
    BrowserModule, Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
