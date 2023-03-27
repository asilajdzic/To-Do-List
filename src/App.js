import { Fragment, useEffect } from 'react';
import { useState } from 'react';

import './App.scss';

import Task from './components/task/task.component';
import TaskInput from './components/task-input/task-input.component';

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
		setTasks(storedTasks);
	}, []);

	const handleAddTask = (taskToAdd) => {
		let newTasks = [...tasks, { id: Date.now(), text: taskToAdd }];
		setTasks(newTasks);
		localStorage.setItem('tasks', JSON.stringify(newTasks));
	};

	const handleRemoveTask = (idToDelete) => {
		const newTasks = tasks.filter((task) => task.id !== idToDelete);
		setTasks(newTasks);
		localStorage.setItem('tasks', JSON.stringify(newTasks));
	};

	return (
		<Fragment>
			<header>To Do List</header>
			<div className='main-container'>
				{tasks.map((task) => (
					<Task
						key={task.id}
						id={task.id}
						text={task.text}
						onRemove={handleRemoveTask}
					/>
				))}
				<TaskInput onAdd={handleAddTask} />
			</div>
		</Fragment>
	);
}

export default App;
