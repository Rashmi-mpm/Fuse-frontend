import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AddDemoComponent } from './demo/add-demo/add-demo.component';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { FuseCardModule } from '@fuse/components/card';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { StylePaginatorDirective } from './paginator.service';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: DemoComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
        DemoComponent,
        AddDemoComponent,
        StylePaginatorDirective
    ],
    imports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(exampleRoutes),
        FuseWidgetModule,
        MatTableModule,
        MatSortModule,
        FuseCardModule,
        MatTabsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatPaginatorModule,
        MatIconModule,
        MatInputModule,
        MatDialogModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatMomentDateModule,
        MatNativeDateModule,
        NgxPaginationModule
    ],
    providers: [MatFormFieldModule,MatDatepickerModule],
})
export class ExampleModule
{
}
