import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from 'app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'app/core/core.module';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { FuseModule } from '@fuse';
import { LayoutModule } from 'app/layout/layout.module';
import { MarkdownModule } from 'ngx-markdown';
import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { appConfig } from 'app/core/config/app.config';
import { appRoutes } from 'app/app.routing';
import { mockApiServices } from 'app/mock-api';

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        MatSortModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),
        NgxPaginationModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
