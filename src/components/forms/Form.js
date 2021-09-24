import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Form.css';
import Input from '../UI/Input';
import { Button } from '../UI/Button';
const Form = props => {
	const dispatch = useDispatch();
	const state = useSelector(state => state);
	const updatingMember = useSelector(state => state.updatingMember);
	const [updatedMember, setUpdatdMember] = useState(state.updatingMember);

	const nameChangeHandler = e => {
		setUpdatdMember(currentMember => {
			return { ...currentMember, name: e.target.value };
		});
	};
	const urlChangeHandler = e => {
		setUpdatdMember(currentMember => {
			return { ...currentMember, pic: e.target.value };
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
	const discChangeHandler = e => {
		setUpdatdMember(currentMember => {
			return { ...currentMember, disc: e.target.value };
		});
	};
	const registerHandler = e => {
		e.preventDefault();
		if (
			updatedMember.name === '' ||
			updatedMember.pic === '' ||
			updatedMember.base === '' ||
			updatedMember.phone === '' ||
			updatedMember.email === '' ||
			updatedMember.disc === ''
		) {
			alert('Please Enter All Required Fields');
			return;
		}
		fetch('https://etea-2075a-default-rtdb.firebaseio.com/membersList.json', {
			method: 'POST',
			body: JSON.stringify(updatedMember),
			headers: { 'Content-Type': 'application/json' },
		});
		dispatch({ type: 'ADD', payload: updatedMember });
		setUpdatdMember({
			name: '',
			pic: '',
			base: '',
			phone: '',
			email: '',
			disc: '',
		});
	};
	const updateHandler = e => {
		e.preventDefault();
		if (
			JSON.stringify(state.updatingMember) === JSON.stringify(updatedMember)
		) {
			dispatch({ type: 'CLOSE_FORM' });
			alert('No change has made to selected member!');
		} else if (
			updatedMember.name === '' ||
			updatedMember.pic === '' ||
			updatedMember.base === '' ||
			updatedMember.phone === '' ||
			updatedMember.email === '' ||
			updatedMember.disc === ''
		) {
			alert('Please Enter All Required Inputs');
		} else {
			fetch('https://etea-2075a-default-rtdb.firebaseio.com/membersList.json', {
				method: 'POST',
				body: JSON.stringify(updatedMember),
				headers: { 'Content-Type': 'application/json' },
			});
			fetch(
				'https://etea-2075a-default-rtdb.firebaseio.com/membersList/' +
					updatingMember.id +
					'.json',
				{
					method: 'DELETE',
				}
			);
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
									onChange={urlChangeHandler}
									placeholder='Image URL'
									value={updatedMember.pic}
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
							<div className='input-label-container'>
								<Input
									className='form-input'
									onChange={discChangeHandler}
									placeholder='Discription'
									value={updatedMember.disc}
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
