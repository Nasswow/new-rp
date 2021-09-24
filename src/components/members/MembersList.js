// import { useState } from 'react';
import { Button } from '../UI/Button';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../forms/Form';
import './MembersList.css';
import { MembersListData } from '../member/MembersListData';
const MembersList = props => {
	const dispatch = useDispatch();
	const isAdding = useSelector(state => state.isAdding);
	const isUpdating = useSelector(state => state.isUpdating);
	const isAdmin = useSelector(state => state.isAdmin);
	return (
		<div className='members-list-container'>
			{(isAdding || isUpdating) && <Form />}
			<div className='members-list-title'>Active ETEA Members</div>
			<MembersListData />
			{isAdmin && !isAdding && (
				<div style={{ width: '100%', textAlign: 'right' }}>
					<Button
						onClick={() => {
							if (isUpdating) {
								alert('Please close updating form first!!');
								return;
							}
							dispatch({ type: 'OPEN_REGISTER_FORM' });
							window.scrollTo(0, 0);
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
