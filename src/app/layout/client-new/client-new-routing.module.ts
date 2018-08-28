import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientNewComponent } from './client-new.component';

const routes: Routes = [
    {
        path: '',
        component: ClientNewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientNewRoutingModule {}
