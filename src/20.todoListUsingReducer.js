import React, { useReducer, useState } from 'react'

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { id: Date.now(), text: action.payLoad, completed: false }]
        case 'REMOVE_TASK':
            return state.filter((task) => task.id !== action.payLoad);
        case 'TOGGLE_TASK':
            return state.map((task)=>task.id===action.payLoad?{
                ...task, completed:!task.completed
            }:task)
        default:
            return state;
    }
}

export default function TodoListUsingReducer() {
    const [tasks, dispatch] = useReducer(taskReducer, [])
    const [taskText, setTaskText] = useState('');

    const addTask = () => {
        if (taskText.trim()) {
            dispatch({ type: 'ADD_TASK', payLoad: taskText })
            setTaskText('');
        }
    }

    const remove = (id) => {
        dispatch({ type: 'REMOVE_TASK', payLoad: id })
    }
    return (
        <div>
            <h1>Todo List Using Reducer</h1>
            <input type='text' value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder='Add new Task...' />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span 
                        style={{textDecoration:task.completed? 'line-through': 'none', cursor: 'pointer'}}
                        onClick={()=>dispatch({type: 'TOGGLE_TASK', payLoad:task.id})}>
                            {task.text}
                        </span>
                        <button onClick={() => remove(task.id)}>REMOVE</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
