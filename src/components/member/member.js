import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../UI/Button';
import './Member.css';
const Member = props => {
	const selectedMember = useSelector(state => state.selectedMember);
	const dispatch = useDispatch();

	return (
		<div>
			<h2 style={{ color: '#44cbb1', fontStyle: 'italic' }}>
				{selectedMember.name}'s Information
			</h2>
			<div className='member-detail'>
				<div className='member-detail-img-container'>
					<img
						src='https://lh3.googleusercontent.com/V2LUpDJOBEfxcdH15L1P-Vt9AxG2btq45neEZW21A_Ujcgn9_vhmCsA_wo3xGn6jUH0mVCxcn5TqcLy-M5N7RvzFkffOldk1NMKcZG8AEqrwu153Ov2ktmEEwM_177_T-qT4W2dlTo_rNWIs4quIbS7rzG1P7RN4ai1pxIGyZCFxiph7bPMA7J1hgAhWveHqeJYaGlSkLBj9afmIuBomC8Z3ZgNx6GiNV8tUIBEXOKwDZYIoYcc8PlOwzywwDJ9J-6E8-jopLkV5tWSs6CAxO-4togg2YOiN5uePdUBVACQ9dL3MJLSnbR_Cm8Sg9yngiiUeKQj2K7Ho_qMMwGG6nUgxXa9Xwh7Lf4IdYrSwBma-BZy5jHjytjibWKx-sG3XzJsIODkglLd46HvKphDD59O2EjvDb1hYWdIw97wQlG78EuFEa0-tC415cKyY2F6zEvVXZLqeAJHxju-mGCRmk9cz52ocFABPgZU4L7lo1Ggr7sQxvx9cJcrJt1U3HhItDeDvQ3rtsl8rJD3DOJ6mSAsX1PpJY15banmR7SUDYbV0L6TqY8Hfgn0QE-fFk5ZCMLtav3xXO6hZeXFiDuOYo4MfDAYRnc4YFT_OlZM6SxsABras397A8KvN8ELZ-GL-Xxc5xRFwf0ahRftPrF-EXUY-CP8iTBiRMpGzPA77SfKS7UgT14CGB8tY3nzF0a3jzeoRmBQjX8zbHJ8df62q6_xOUA=w1774-h1332-no?authuser=0'
						alt='member details'
					/>
				</div>
				<div className='member-details-container'>
					<div className='member-detail-name'>{selectedMember.name}</div>
					<div className='member-detail-id'>{selectedMember.id}</div>
					<div className='member-detail-base'>{selectedMember.base}</div>
					<div className='member-detail-phone'>{selectedMember.phone}</div>
					<div className='member-detail-email'>{selectedMember.email}</div>
					<div className='member-detail-disc'>{selectedMember.disc}</div>
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
