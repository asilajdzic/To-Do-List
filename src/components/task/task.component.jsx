import './task.styles.scss';

const Task = ({ text, id, onRemove }) => {
	return (
		<div className='task-container'>
			<div className='task'>{text}</div>
			<button className='remove-task-button' onClick={() => onRemove(id)}>
				&#10008;
			</button>
		</div>
	);
};

export default Task;
