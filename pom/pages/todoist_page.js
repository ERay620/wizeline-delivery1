import { Selector } from "testcafe";

class Todoist {
    constructor() {
        this.addTask =Selector('button', { timeout: 20000 }).withAttribute('class', 'empty-state-button').withText('Add a task');

    }

}

export default new Todoist
