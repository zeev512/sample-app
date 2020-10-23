import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
//
// Since ng-template doesn't render itself we will get the empty screen.
//
@Component({
	selector: 'app-root',
	template: `
		<ng-template>
			<button class="tab-button" (click)="login()">{{loginText}}</button>
			<button class="tab-button" (click)="signUp()">{{signUpText}}</button>
		</ng-template>
	`
})
export class AppComponent {

	loginText = 'Login';
	signUpText = 'Sign Up';
	lessons = ['Lesson 1', 'Lessons 2'];

	login() {
		console.log('Login');
	}

	signUp() {
		console.log('Sign Up');
	}

}
