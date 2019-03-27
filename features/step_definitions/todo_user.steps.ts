import { Actor, BrowseTheWeb } from 'serenity-js/protractor';
import { protractor } from 'protractor';
import { Start } from '../../spec/screenplay/tasks/start';
import { AddATodoItem } from '../../spec/screenplay/tasks/add_a_todo_item'
import { listOf } from '../../spec/text';
import { expect } from '../../spec/expect';
import { TodoList } from '../../spec/screenplay/components/todo_list';

export = function todoUserSteps() {
    
    let actor: Actor;

    this.setDefaultTimeout(30 * 1000);  // The todomvc.com website can sometimes be a bit slow to load, so we tell
                                        // Cucumber to give it up to 30 seconds to get ready.

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function (actorName: string, items: string) {
        //Define an actor
        actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));
        
        // Actor has a Goal and performs a Task to achieve Goal
        return actor.attemptsTo(
            //list of Tasks 
            Start.withATodoListContaining(listOf(items))
        );
    });

    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function (itemName: string) {
        return actor.attemptsTo(
            AddATodoItem.called(itemName)
        );
    });

    this.Then(/^.* todo list should contain (.*?)$/, function (items: string) {
        return expect(actor.toSee(TodoList.Items_Displayed)).to.eventually.deep.equal(listOf(items));
    });
};
