import { Selector, t } from "testcafe";
import XPathSelector from '../data/xpath-selector'



const taskNameXPath = '//div[@class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]'
const taskName = XPathSelector(taskNameXPath);

const taskDescriptionXPath = '//textarea[@class="task_editor__description_field no-focus-marker"]'
const taskDescription = XPathSelector(taskDescriptionXPath);

const openCalendarXPath = '(//button[@id="dropdown-select-6"]/ ../button/div)[1]'
const openCalendar = XPathSelector(openCalendarXPath);

const addTaskButtonXPath = '//button[text() ="Add task"]'
const addTaskButton = XPathSelector(addTaskButtonXPath);   //red Add task button

const addedTaskXPath = '//div[text() ="ER"]'    //Added task: mmm
const addedTask = XPathSelector(addedTaskXPath);

const addedTaskWithPlusXPath = '//button[@data-add-task-navigation-element="true"]'    // + add task 
const addedTaskWithPlus = XPathSelector(addedTaskWithPlusXPath);




class Todoist {
    constructor() {
        this.addTask =Selector('button').withAttribute('class', 'empty-state-button').withText('Add a task');
        this.taskName = Selector(taskName)
        this.taskDescription = Selector(taskDescription)
        this.openCalendar = Selector(openCalendar)
        this.addTaskButton = Selector(addTaskButton)
        this.addedTask = Selector(addedTask)
        this.addedTaskWithPlus = Selector(addedTaskWithPlus)

    }

    async typeTaskNameDescription() {
        await t
     .click(addedTaskWithPlus)
     .click(taskName).wait(2000)
    .typeText(taskName, 'ER')
    .click(taskDescription)
    .typeText(taskDescription,"mmmmmmmmmmmmmmmmmmmmm" )
    
    }

    async openCalendarTable() {
        await t
        .click(openCalendar)

    }

    async submitTask() {
        await t
        .click(addTaskButton)

    }

   



}

export default new Todoist
