// import { useState } from 'react';
import { Link } from 'react-router-dom';
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

	console.log(members);
	return (
		<div className='members-list-container'>
			{(isAdding || isUpdating) && <Form />}
			<h1
				className='members-list-title'
				style={{ color: '#44cbb1', fontStyle: 'italic' }}
			>
				Active ETEA Members
			</h1>
			<div className='members'>
				{members.map(member => (
					<div key={member.id} className='member-container'>
						<div className='member-name'>
							{member.name} ({member.id})
						</div>
						<div
							onClick={() => {
								dispatch({ type: 'MEMBER_SELECTED', payload: member });
							}}
							className='member-image'
						>
							<Link to={`/members/:${member.id}`}>
								<img
									src={member.pic}
									// src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/101074826_10217290160152391_5104443351394942976_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=0g3l8UYMP00AX-svrwN&_nc_ht=scontent-sea1-1.xx&oh=4c629f9f7cc8ffb8ae430cbdba0ab870&oe=6172A4B8'
									alt='member'
								/>
							</Link>
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
			{isAdmin && !isAdding && (
				<div style={{ width: '100%', textAlign: 'right' }}>
					<Button
						onClick={() => {
							if (isUpdating) {
								alert('Please close updating form first!!');
								return;
							}
							dispatch({ type: 'OPEN_REGISTER_FORM' });
						}}
						value='Register New Members'
						type='submit'
					/>
				</div>
			)}
		</div>
	);
};

export default MembersList;
