import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<ng-template [ngIf]="lessons" [ngIfElse]="loading">
			<div class="lessons-list">
				<button class="tab-button" (click)="login()">{{loginText}}</button>
				<button class="tab-button" (click)="signUp()">{{signUpText}}</button>
			</div>
		</ng-template>
		<ng-template #loading>
			<div>Loading...</div>
		</ng-template>
	`})
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
