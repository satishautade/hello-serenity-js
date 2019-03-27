import { PerformsTasks, Task } from 'serenity-js/protractor';
import { AddATodoItem } from './add_a_todo_item';
import { Enter, Open } from 'serenity-js/protractor';

export class Start implements Task {
	
	static withATodoListContaining(items: string[]) {
		return new Start(items);
	}

	performAs(actor: PerformsTasks): PromiseLike<void> {
		return actor.attemptsTo(

			Open.browserOn('/examples/angularjs'),
			//add each items in the TO DO list 
			...this.addAll(this.items)
		);
	}

	constructor(private items: string[]) {
		this.items = items;
	}

	private addAll(items: string[]): Task[]{
		return items.map(item => AddATodoItem.called(item));
	}
}