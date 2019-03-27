import { PerformsTasks, Task } from 'serenity-js/protractor';
import { Enter, Open } from 'serenity-js/protractor';
import { TodoList } from '../components/todo_list';
import { protractor } from 'protractor';

export class AddATodoItem implements Task {
	
	static called(itemName: string) {
		return new AddATodoItem(itemName);
	}

	performAs(actor: PerformsTasks): PromiseLike<void> {
		return actor.attemptsTo(
			//add each items in the TO DO list 
			Enter.theValue(this.itemName)
				.into(TodoList.What_Needs_To_Be_Done)
				.thenHit(protractor.Key.ENTER)
		);
	}

	constructor(private itemName: string) {

	}
}