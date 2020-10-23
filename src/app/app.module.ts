import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { TabContainerComponent } from './tab-container/tab-container.component';

@NgModule({
	declarations: [
		AppComponent,
		TabContainerComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
