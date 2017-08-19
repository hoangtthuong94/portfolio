import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// import {ParticlesModule} from '/node_modules/particles.js';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { ParticlesBlockComponent } from './particles-block/particles-block.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ParticlesBlockComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
