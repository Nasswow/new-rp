import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '../UI/Button';
import './Member.css';
const Member = () => {
	const selectedMember = useSelector(state => state.selectedMember);
	console.log(selectedMember);
	return (
		<div>
			<h2 style={{ color: '#44cbb1', fontStyle: 'italic' }}>
				{selectedMember.name}'s Information
			</h2>
			<div className='member-detail'>
				<div className='member-detail-img-container'>
					<img src={selectedMember.pic} alt='member details' />
				</div>
				<div className='member-details-container'>
					<div className='member-detail-name'>
						Member Name: {selectedMember.name}
					</div>
					<div className='member-detail-base'>
						Current Base: {selectedMember.base}
					</div>
					<div className='member-detail-phone'>
						Phone Number: {selectedMember.phone}
					</div>
					<div className='member-detail-email'>
						Email Address: {selectedMember.email}
					</div>
					<div className='member-detail-disc'>
						Member Details: {selectedMember.disc}
					</div>
				</div>
			</div>
			<div style={{ textAlign: 'right', paddingRight: '70px' }}>
				<Link to='/'>
					<Button className='member-detail-btn' value='Back to Members' />
				</Link>
			</div>
		</div>
	);
};

export default Member;
