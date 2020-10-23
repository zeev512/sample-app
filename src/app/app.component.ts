import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

/*
Possible solution would be to replace the outer div element
with the ng-container element directive.

As we can see, the ng-container directive provides us with an element
that we can attach a structural directive to.
This way we don't have to create an extra element just for that.
But the major use case for the ng-container directive is that it can
also provide a placeholder for injecting a template dynamically into the
page.
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
		</ng-container>	`})
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
