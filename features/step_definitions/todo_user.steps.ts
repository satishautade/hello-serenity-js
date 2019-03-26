import { Actor } from 'serenity-js/protractor';
import { Start } from '../../spec/screenplay/tasks/start';
import { listOf } from '../../spec/text';

export = function todoUserSteps() {
    
    let actor: Actor;

    this.setDefaultTimeout(30 * 1000);  // The todomvc.com website can sometimes be a bit slow to load, so we tell
                                        // Cucumber to give it up to 30 seconds to get ready.

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function (actorName: string, items: string) {
        //Define an actor
        actor = Actor.named(actorName);
        
        // Actor has a Goal and performs a Task to achieve Goal
        return actor.attemptsTo(
            //list of Tasks 
            Start.withATodoListContaining(listOf(items))
        );
    });

    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function (itemName: string, callback) {
        callback(null, 'pending');
    });

    this.Then(/^.* todo list should contain (.*?)$/, function (items: string, callback) {
        callback(null, 'pending');
    });
};
