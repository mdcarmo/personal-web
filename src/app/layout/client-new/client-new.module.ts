import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule, MatButtonModule, MatCardModule, MatIconModule, MatRadioModule,
    MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { ClientNewRoutingModule } from './client-new-routing.module';
import { ClientNewComponent } from './client-new.component';

@NgModule({
    imports: [
        CommonModule,
        ClientNewRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule
    ],
    declarations: [ClientNewComponent]
})
export class ClientNewModule {}
