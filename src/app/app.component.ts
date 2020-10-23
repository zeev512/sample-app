import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

/*
Here is the breakdown of this example:
1. This template, unlike the previous templates also has one input variable (it could also have several)
2. The input variable is called lessonsCounter , and it's defined via a ng-template property using the pre x let-
3. The variable lessonsCounter is visible inside the ng-template body, but not outside
4. The content of this variable is determined by the expression that its assigned to the property let-lessonsCounter
5. That expression is evaluated against a context object, passed to ngTemplateOutlet together with the template to instantiate
6. This context object must then have a property named estimate , for any value to be displayed inside the template
7. The context object is passed to ngTemplateOutlet via the context property, that can receive any expression that evaluates to an object

This is what would get rendered to the screen:
Approximately 10 lessons ...
 */
@Component({
	selector: 'app-root',
	template: `
		<ng-template #estimateTemplate let-lessonsCounter="estimate">
			<div> Approximately {{lessonsCounter}} lessons ...
			</div>
		</ng-template>
		<ng-container *ngTemplateOutlet="estimateTemplate;context:ctx">
		</ng-container>
	`
})
export class AppComponent {

	/*loginText = 'Login';
	signUpText = 'Sign Up';
	lessons = ['Lesson 1', 'Lessons 2'];

	login() {
		console.log('Login');
	}

	signUp() {
		console.log('Sign Up');
	}*/
	totalEstimate = 10;
	ctx = {estimate: this.totalEstimate};

}
