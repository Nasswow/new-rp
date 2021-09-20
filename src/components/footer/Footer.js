import React from 'react';
// import { useSelector } from "react-redux";
import './Footer.css';
const Footer = () => {
	return (
		<div>
			<div className='footer-container'>
				<div className='footer'>
					<ul className='footer-link-ul'>
						<h4>Important Links</h4>
						<li>
							<a
								href='https://kingcounty.gov/depts/transportation/metro.aspx'
								target='_blank'
								rel='noreferrer'
							>
								Metro Website
							</a>
						</li>
						<li>
							<a
								href='https://atu587.org/login/'
								target='_blank'
								rel='noreferrer'
							>
								ATU 587 Website
							</a>
						</li>
						<li>
							<a
								href='https://kingcounty.gov/'
								target='_blank'
								rel='noreferrer'
							>
								King Cnounty Website
							</a>
						</li>
					</ul>
					<div>Ethiopian Transit Employees Association</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
