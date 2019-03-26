import { PerformsTasks, Task } from 'serenity-js/protractor';

export class Start implements Task {
	
	static withATodoListContaining(items: string[]) {
		return new Start(items);
	}

	performAs(actor: PerformsTasks): PromiseLike<void> {
		return actor.attemptsTo(
			//add each items in the TO DO list 
		);
	}

	constructor(private items: string[]) {

	}
}