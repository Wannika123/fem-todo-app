import React from 'react';
import { ReactSortable } from "react-sortablejs";
import checkIcon from "../images/icon-check.svg";
import { ReactComponent as CrossIcon} from "../images/icon-cross.svg";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userInput: '',
          tasks: [],
          displayStatus: 'all',
          tasksAddedAmount: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.saveData = this.saveData.bind(this);
        this.check = this.check.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.changeDisplay = this.changeDisplay.bind(this);
        this.filterTasks = this.filterTasks.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
    }
    handleChange(e) {
        this.setState({
          userInput: e.target.value
        })
    }
    addTask(e) {
        e.preventDefault();
        if (this.state.userInput === '') {
            alert('Please indicate your task');
            return;
        }
        const toDo = this.state.userInput;
        this.setState((state) => ({
            tasks: [
              ...state.tasks, 
              {
              id: state.tasksAddedAmount + 1,
              task: toDo,
              active: true
              }
            ],
            tasksAddedAmount: state.tasksAddedAmount + 1,
            userInput: ''
        }))
        document.querySelector('input[type=text]').value = '';
        console.log(this.state.tasks)
    }
    check(e) {
        const key = e.target.value;
        const index = this.state.tasks.findIndex(item => item.id === Number(key));
        const newTasks = [...this.state.tasks];
        if (!e.target.checked) {
            const answer = window.confirm('Do you want to uncheck this task?')
            if (answer === true) {
              newTasks[index].active = true;
            } else {
              e.target.checked = true;
              return;
            }
        } else {
            newTasks[index].active = false;
        }
        console.log(newTasks)
        this.setState({
            tasks: newTasks
        })
    }
    deleteTask(e) {
        const answer = window.confirm('Do you want to delete this task?');
        if (answer) {
            const key = e.currentTarget.id.match(/\d+$/);
            const index = this.state.tasks.findIndex(item => item.id === Number(key));
            const newTasks = [...this.state.tasks];
            newTasks.splice(index, 1);
            console.log(newTasks)
            this.setState({
                tasks: newTasks
            })
        }
    }
    changeDisplay(e) {
        if (e.target.checked) {
            this.setState({
                displayStatus: e.target.value
            })
        }
    }
    filterTasks(tasks) {
        let listToDisplay;
        if (this.state.displayStatus === 'all') {
            listToDisplay = tasks
        } else if (this.state.displayStatus === 'active') {
            listToDisplay = tasks.filter(item => item.active);
        } else {
            listToDisplay = tasks.filter(item => !item.active);
        }   
        return listToDisplay
    }
    clearCompleted() {
        this.setState((state) => ({
            tasks: state.tasks.filter(item => item.active === true)
        }))
    }
    saveData() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
        localStorage.setItem('tasksAddedAmount', this.state.tasksAddedAmount.toString())
    }
    componentDidMount() {
        document.getElementById('all').checked = true
        if (localStorage.getItem('tasks')) {
            this.setState({
                tasks: JSON.parse(localStorage.getItem('tasks')),
                tasksAddedAmount: Number(localStorage.getItem('tasksAddedAmount'))
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.tasks !== this.state.tasks) {
            console.log('hi')
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
            localStorage.setItem('tasksAddedAmount', this.state.tasksAddedAmount.toString())
        }
    }

    render() {
        let btnStyle;
        if (this.state.userInput === '') {
            btnStyle = { display: 'none' }
        } else {
            btnStyle = { display: 'block' }
        }
        return (
            <>
                <form className="list-container Input" onSubmit={this.addTask}>
                    <div className="list">
                        <div className="circle"></div>
                        <input type="text" onChange={this.handleChange} placeholder="Create a new todo..."/>
                    </div>
                    <button className="add-task-btn" onClick={this.addTask} style={btnStyle}>Add Task</button>
                </form>
                <div className="todolist">
                    <ReactSortable 
                        tag="ul"  
                        list={this.state.tasks} 
                        setList={(newState) => this.setState({ tasks: newState })}           
                    >
                        {this.filterTasks(this.state.tasks).map(item => 
                            <li className="list-container" key={item.id} id={item.id} >
                                <div className="list">
                                    { 
                                    item.active
                                        ? <input type="checkbox" value={item.id} onClick={this.check} />
                                        : <input type="checkbox" value={item.id} onClick={this.check} checked />
                                    }
                                    <div className="checkboxBtn circle">
                                        {!item.active && <img src={checkIcon} alt="" />}
                                    </div> 
                                    <p>{item.task}</p>  
                                </div>
                                <button className="delete-btn" id={"delete-btn-" + item.id} onClick={this.deleteTask}><CrossIcon /></button>
                            </li>)
                        }
                    </ReactSortable>
                    <div className="todolist-footer">
                        <div>{this.state.tasks.filter(task => task.active).length} items left</div>
                        <div className="display-options">
                            <input type="radio" id="all" value="all" name="display-option" onChange={this.changeDisplay} />
                            <label htmlFor="all">All</label>
                            <input type="radio" id="active" value="active" name="display-option" onChange={this.changeDisplay} />
                            <label htmlFor="active">Active</label>
                            <input type="radio" id="complete" value="complete" name="display-option" onChange={this.changeDisplay} />
                            <label htmlFor="complete">Complete</label>
                        </div>
                        <button className="clear-btn" onClick={this.clearCompleted}>Clear Completed</button>
                    </div>
                </div>
                {this.state.tasks.length > 1 && <div className="drag-text"><p>Drag and drop to reorder list</p></div>}
            </>
        )
    }
}

export default ToDoList;