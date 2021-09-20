// import { useState } from 'react';
import { Button, SmallButton } from '../UI/Button';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../forms/Form';
import './MembersList.css';
const MembersList = props => {
	const dispatch = useDispatch();
	const members = useSelector(state => state.members);
	const isAdding = useSelector(state => state.isAdding);
	const isUpdating = useSelector(state => state.isUpdating);
	const isAdmin = useSelector(state => state.isAdmin);

	const openForm = () => {
		dispatch({ type: 'OPEN_REGISTER_FORM' });
	};
	// const updateHandle = () => {};
	console.log(members);
	return (
		<div className='members-list-container'>
			<h1 style={{ color: '#44cbb1', fontStyle: 'italic' }}>ETEA Members</h1>
			{(isAdding || isUpdating) && <Form />}
			<div className='members'>
				{members.map(member => (
					<div key={member.id} className='member-container'>
						<div className='member-name'>
							{member.name} ({member.id})
						</div>
						<div
							onClick={() => {
								dispatch({ type: 'MEMBER_DETAILS', payload: member });
							}}
							className='member-image'
						>
							Image
						</div>
						<div className='member-base'>
							{member.base} Base {member.position}
						</div>
						{isAdmin && (
							<div className='member-base'>
								<SmallButton
									value='Update'
									style={{ marginRight: '5px' }}
									onClick={() => {
										dispatch({
											type: 'OPEN_UPDATE_FORM',
											payload: member,
										});
									}}
								/>
								<SmallButton
									value='Delete'
									onClick={() => {
										dispatch({ type: 'DELETE', payload: member });
									}}
								/>
							</div>
						)}
					</div>
				))}
			</div>
			{isAdmin && (
				<Button onClick={openForm} value='Register New Members' type='submit' />
			)}
		</div>
	);
};

export default MembersList;
