import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SmallButton } from '../UI/Button';
import './MembersListData.css';

export const MembersListData = () => {
	const membersList = useSelector(state => state.members);
	const updatingMember = useSelector(state => state.updatingMember);
	const isAdmin = useSelector(state => state.isAdmin);
	const dispatch = useDispatch();
	useEffect(() => {
		const FetchMembers = async () => {
			const res = await fetch(
				'https://etea-2075a-default-rtdb.firebaseio.com/membersList.json'
			);
			const resData = await res.json();
			const members = [];
			for (const key in resData) {
				const member = {
					...resData[key],
					id: key,
				};
				members.push(member);
			}
			const sortedMembers = members.sort((a, b) => (a.name > b.name ? 1 : -1));
			dispatch({ type: 'MEMBERS_FETCHED', payload: sortedMembers });
		};
		FetchMembers();
	}, [dispatch]);

	const memberDeleteHandler = member => {
		fetch(
			'https://etea-2075a-default-rtdb.firebaseio.com/membersList/' +
				member.id +
				'.json',
			{ method: 'DELETE' }
		);
		dispatch({ type: 'DELETE', payload: member });
	};
	return (
		<div className='members'>
			{membersList.map(member => (
				<div key={member.id} className='member-container'>
					<div className='member-name'>{member.name}</div>
					<div
						onClick={() => {
							dispatch({ type: 'MEMBER_SELECTED', payload: member });
						}}
						className='member-image'
					>
						<Link to={`/members/:${member.name}`}>
							<img src={member.pic} alt='member' />
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
								onClick={() =>
									dispatch({
										type: 'OPEN_UPDATE_FORM',
										payload: member,
									})
								}
							/>
							<SmallButton
								value='Delete'
								onClick={() => memberDeleteHandler(member)}
							/>
						</div>
					)}
				</div>
			))}
		</div>
	);
};
