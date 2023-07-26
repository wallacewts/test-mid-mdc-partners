import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { SuccessMessageComponent } from './components/success-message/success-message.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
];

@NgModule({
  declarations: [ContactComponent, SuccessMessageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
