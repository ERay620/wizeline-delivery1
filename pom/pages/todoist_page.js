import { Selector, t } from "testcafe";
import XPathSelector from '../data/xpath-selector'


const taskNameXPath = '//div[@class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]'
const taskName = XPathSelector(taskNameXPath);

const taskDescriptionXPath = '//textarea[@class="task_editor__description_field no-focus-marker"]'
const taskDescription = XPathSelector(taskDescriptionXPath);

//const openCalendarXPath = '//span[@class="date date_today"]'
//const openCalendar = XPathSelector(openCalendarXPath);

const addedTaskXPath = '//div[text() ="ER"]'  
const addedTask = XPathSelector(addedTaskXPath);

const addedTaskWithPlusXPath = '//button[@data-add-task-navigation-element="true"]' 
const addedTaskWithPlus = XPathSelector(addedTaskWithPlusXPath);

class Todoist {
    constructor() {
        this.addTask =Selector('button').withAttribute('class', 'empty-state-button').withText('Add a task');
        this.taskName = Selector(taskName)
        this.taskDescription = Selector(taskDescription)
        //this.openCalendar = Selector('openCalendar')     
        this.plusAddTaskIcon = Selector ('.plus_add_button')
        this.addedTask = Selector(addedTask)
        this.addedTaskWithPlus = Selector(addedTaskWithPlus)
        this.schedule = Selector('.date').withText('Today')
        this.scheduleTomorrow = Selector('.scheduler-suggestions-item-label').withText('Tomorrow')
        this.addTaskButton = Selector('.reactist_button').withText('Add task')
        this.upcoming = Selector('.item_content').withText('Upcoming')
        this.taskContent = Selector('.markdown_content').withText('rr')
        this.projectsQuickAdd  = Selector('[aria-label="Add Project"] > svg')
        this.projectName = Selector('#edit_project_modal_field_name')  
        this.colorSelector = Selector('.color_dropdown_select__name')
        this.myClcolor = Selector('.color_dropdown_select__name').withText('Blue')
        this.addToFavorites = Selector('.reactist_switch')
        this.addNewProjectButton = Selector('[class="reactist_modal_box__actions"] >button ').withText('Add')
        this.isDidplayedMyProjectName  = Selector('[class="simple_content"]').withText('myprojectName')
        this.addedProject = Selector('.text').withText('myprojectName')
        this.deleteProjectModal = Selector('#menu_delete_text').withText('Delete project')
        this.deleteProject = Selector('[class="ist_button ist_button_red"]').withText('Delete')
        this.taskListContent = Selector('[class="task_list_item__content"]')  
        this.moreActions = Selector ('[class="item_action item_actions_more"]')
        this.deleteTaskModal = Selector('.icon_menu_item__content').withText('Delete task')     
        this.deletTask = Selector ('[class="ist_button ist_button_red"]').withText('Delete')
        this.navigateInbox  = Selector ('[class="item_content"]').withText('Inbox')
        this.navigateToday  = Selector ('[class="item_content"]').withText('Todat')
        this.allClear = Selector('[class="empty-state-header"]').withText('All clear')

    }

    async typeTaskNameDescription() {
        await t
     .click(addedTaskWithPlus)
     .click(taskName)
    .typeText(taskName, 'ER')
    .click(taskDescription)
    .typeText(taskDescription,"Write something meaningful" )
    
    }

    async typeTaskNameDescriptionTwo(myTaskName, myTaskDescription ) {
        await t
    .click(addedTaskWithPlus)
    .click(taskName)
    .typeText(taskName, myTaskName)
    .click(taskDescription)
    .typeText(taskDescription, myTaskDescription)
    
    }


    async ceateNewProject(myProjectName) {

    await  t
    .click(this.projectsQuickAdd).wait(1000)
    .typeText(this.projectName,myProjectName )
    .click(this.colorSelector)
    .click(this.myClcolor)
    .click(this.addToFavorites)
    .click(this.addNewProjectButton)
    .wait(2000).expect(this.isDidplayedMyProjectName.exists).ok()
    .rightClick(this.addedProject).wait(1000)
    .click(this.deleteProjectModal).wait(1000)
    .click(this.deleteProject).wait(1000)  

    } 
    
    async createTasks(taskNumber) {

        for(let i=1; i<=taskNumber ;i++) {
            await t
            .click(this.addedTaskWithPlus)
            .click(this.taskName)
            .typeText(this.taskName, 'T'+i)
            .click(taskDescription)
            .typeText(taskDescription, 'myTaskDescription')
            .click(this.addTaskButton).wait(3000)

            const myAddedTask = Selector('[class="markdown_content task_content"]').withText('T'+i)
            await t.expect(myAddedTask.exists).ok()

            console.log('Task Number is : '+i +', Task Name is: '
            + await myAddedTask.textContent)
            await t.eval(() => location.reload(true));
            
        }
        

    }

    async deletaAllMyTask(taskNumber) {
        for(let i=1; i<=taskNumber ;i++) {
            await t
            .click(this.taskListContent)
            .click(this.moreActions)
            .click(this.deleteTaskModal)
            .click(this.deletTask).wait(1000)
        }     

    }

    async scheduleTaskTomorrow() {
     await t.click(this.schedule)
    .click(this.scheduleTomorrow)
    .click(this.addTaskButton)
    .click(this.navigateInbox)
    await t.wait(3000).expect(this.taskListContent.exists).ok().wait(2000)

    }

}
export default new Todoist