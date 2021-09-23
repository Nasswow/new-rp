import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Form.css';
import Input from '../UI/Input';
import { Button } from '../UI/Button';
const Form = props => {
	const dispatch = useDispatch();
	const state = useSelector(state => state);
	const [updatedMember, setUpdatdMember] = useState(state.updatingMember);

	const nameChangeHandler = e => {
		setUpdatdMember(currentMember => {
			return { ...currentMember, name: e.target.value };
		});
	};
	const idChangeHandler = e => {
		setUpdatdMember(currentMember => {
			return { ...currentMember, id: e.target.value };
		});
	};
	const baseChangeHandler = e => {
		setUpdatdMember(currentMember => {
			return { ...currentMember, base: e.target.value };
		});
	};
	const phoneChangeHandler = e => {
		setUpdatdMember(currentMember => {
			return { ...currentMember, phone: e.target.value };
		});
	};
	const emailChangeHandler = e => {
		setUpdatdMember(currentMember => {
			return { ...currentMember, email: e.target.value };
		});
	};
	const registerHandler = e => {
		e.preventDefault();
		const sameId = state.members.filter(
			member => member.id === updatedMember.id
		);

		if (
			updatedMember.name === '' ||
			updatedMember.id === '' ||
			updatedMember.base === '' ||
			updatedMember.phone === '' ||
			updatedMember.email === ''
		) {
			alert('Please Enter All Required Fields');
			return;
		} else if (sameId[0]?.id === updatedMember.id) {
			alert('Member ID Already Exist!!');
			return;
		}
		dispatch({ type: 'ADD', payload: updatedMember });
		setUpdatdMember({ name: '', id: '', base: '', phone: '', email: '' });
		// dispatch({ type: 'CLOSE_FORM' });
	};
	const updateHandler = e => {
		e.preventDefault();
		const sameId = state.members.filter(
			member => member.id === updatedMember.id
		);
		if (
			JSON.stringify(state.updatingMember) === JSON.stringify(updatedMember)
		) {
			dispatch({ type: 'CLOSE_FORM' });
			alert('No change has made to selected member!');
		} else if (
			updatedMember.name === '' ||
			updatedMember.id === '' ||
			updatedMember.base === '' ||
			updatedMember.phone === '' ||
			updatedMember.email === ''
		) {
			alert('Please Enter All Required Inputs');
		} else if (sameId[0]?.id === updatedMember.id) {
			alert('Member ID Already Exist!!');
		} else {
			dispatch({ type: 'ADD', payload: updatedMember });
			dispatch({ type: 'DELETE', payload: state.updatingMember });
			dispatch({ type: 'CLOSE_FORM' });
		}
	};
	return (
		<div>
			{(state.isAdding || state.isUpdating) && (
				<div className='update-form-container'>
					<div className='update-form-inner-container'>
						{state.isUpdating && (
							<h3 className='update-title'>Updating Member's Information</h3>
						)}
						{state.isAdding && (
							<h3 className='update-title'>Registering New Member</h3>
						)}
						<div className='update-form'>
							<div className='input-label-container'>
								<Input
									className='form-input'
									onChange={nameChangeHandler}
									placeholder='Name'
									value={updatedMember.name}
								/>
							</div>
							<div className='input-label-container'>
								<Input
									className='form-input'
									onChange={idChangeHandler}
									placeholder='ID'
									value={updatedMember.id}
								/>
							</div>
							<div className='input-label-container'>
								<Input
									className='form-input'
									onChange={baseChangeHandler}
									placeholder='Base'
									value={updatedMember.base}
								/>
							</div>
							<div className='input-label-container'>
								<Input
									className='form-input'
									onChange={phoneChangeHandler}
									placeholder='Phone'
									value={updatedMember.phone}
								/>
							</div>
							<div className='input-label-container'>
								<Input
									className='form-input'
									onChange={emailChangeHandler}
									placeholder='Email'
									value={updatedMember.email}
								/>
							</div>
						</div>
						<div className='update-cancel-btn'>
							{state.isAdding && (
								<Button
									onClick={registerHandler}
									value='Register'
									type='submit'
								/>
							)}
							{state.isUpdating && (
								<Button onClick={updateHandler} value='Update' type='submit' />
							)}
							<Button
								onClick={() => {
									dispatch({ type: 'CLOSE_FORM' });
								}}
								value='Cancel'
								type='submit'
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default Form;
