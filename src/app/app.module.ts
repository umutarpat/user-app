import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './module/components/app-component/app.component';
import { UserListComponent } from './module/components/user-list/user-list.component';
import { AddListComponent } from './module/components/add-list/add-list.component';
import { EditListComponent } from './module/components/edit-list/edit-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import {UserTableComponent} from './module/ui/user-table/user-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DigitOnlyModule } from '@uiowa/digit-only';
import {MatIconModule} from '@angular/material/icon';
import { DeleteDialogComponent } from './module/components/dialogs/delete/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddListComponent,
    EditListComponent,
    UserTableComponent,
    DeleteDialogComponent,
  ],
  imports: [
    MatInputModule,
    DigitOnlyModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
