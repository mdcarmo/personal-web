import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule, MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { ClientListRoutingModule } from './client-list-routing.module';
import { ClientListComponent } from './client-list.component';

@NgModule({
    imports: [
        CommonModule,
        ClientListRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule
    ],
    declarations: [ClientListComponent]
})
export class ClientListModule {}
