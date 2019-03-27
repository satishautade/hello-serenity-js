import { Target, Text } from 'serenity-js/protractor';
import { by } from 'protractor';

export class TodoList{
	static What_Needs_To_Be_Done = Target.the('"What needs to be done?" input box').located(by.model('newTodo'));
	static Items = Target.the('List of Items').located(by.repeater('todo in todos'));
	static Items_Displayed = Text.ofAll(TodoList.Items);
}