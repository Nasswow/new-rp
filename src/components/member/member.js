import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '../UI/Button';
import './Member.css';
const Member = () => {
	const selectedMember = useSelector(state => state.selectedMember);
	console.log(selectedMember);
	return (
		<div>
			<h3 style={{ color: '#44cbb1', fontStyle: 'italic' }}>
				{selectedMember.name}'s Information
			</h3>
			<div className='member-detail'>
				<div className='member-detail-img-container'>
					<img src={selectedMember.pic} alt='member details' />
				</div>
				<div className='member-details-container'>
					<div className='member-detail-name'>{selectedMember.name}</div>
					<div className='member-detail-disc'>
						{selectedMember.name} is currently an active member of ETEA.{' '}
						{selectedMember.name} can be reached at
						{selectedMember.phone} or
						{selectedMember.email}.
					</div>
				</div>
			</div>
			<div className='member-btn'>
				<Link to='/'>
					<Button className='member-detail-btn' value='Back to Members' />
				</Link>
			</div>
		</div>
	);
};

export default Member;
