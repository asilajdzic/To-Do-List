import './task-input.styles.scss';
import { useState } from 'react';

const TaskInput = ({ onAdd }) => {
	const [newTask, setNewTask] = useState('');

	const handleTaskChange = (e) => {
		setNewTask(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('y');
		if (newTask.trim() !== '') {
			onAdd(newTask);
			setNewTask('');
		}
	};

	return (
		<div className='new-task-container'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={newTask}
					onChange={handleTaskChange}
					placeholder='Enter new task here'
					name='new-task'
				></input>
				<button className='add-task-button' type='submit'>
					&#10004;
				</button>
			</form>
		</div>
	);
};

export default TaskInput;
