import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

/*
This is a real solution by which we use ng-container, the Angular built-in element directive
*/
@Component({
	selector: 'app-root',
	template: `
		<ng-container *ngIf="lessons">
			<div class="lesson" *ngFor="let lesson of lessons">
				<div class="lesson-detail">
					{{lesson | json}}
				</div>
			</div>
		</ng-container>
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
