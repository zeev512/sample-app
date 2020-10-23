import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

/*
When we use *ngIf structural directive the Angular internally desugars the more concise
*ngIf structural directive syntax. Let's break down what happened during the desugaring:
- The element onto which the structural directive ngIf was applied has been moved into an ng-template
- The expression of *ngIf has been split up and applied to two separate directives, using the [ngIf] and [ngIfElse]
  template input variable syntax
Exactly the same process occurs with with *ngFor and *ngSwitch structural directives.
*/
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
