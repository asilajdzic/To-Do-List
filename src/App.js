import { Fragment } from 'react';
import { useState } from 'react';

import './App.scss';

import Task from './components/task/task.component';
import TaskInput from './components/task-input/task-input.component';

function App() {
	const [tasks, setTasks] = useState([]);

	const handleAddTask = (newTask) => {
		setTasks([...tasks, { id: Date.now(), text: newTask }]);
	};

	const handleRemoveTask = (idToDelete) => {
		setTasks(tasks.filter((task) => task.id !== idToDelete));
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
