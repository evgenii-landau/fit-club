import React from 'react';
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

export const Reasons = () => {
	return (
		<div className="Reasons" id='reasons'>
			<div className="left-r">
				<img src={image1} alt="Man"/>
				<img src={image2} alt="Man"/>
				<img src={image3} alt="Man"/>
				<img src={image4} alt="Man"/>
			</div>
			<div className="right-r">
				<span>some reasons</span>

				<div>
					<span className='stroke-text'>why</span>
					<span> chose us?</span>
				</div>

				<div className='details-r'>
					<div>
						<img src={tick} alt='Tick'/>
						<span>OVER 140+ EXPERT COACHS</span>
					</div>
					<div>
						<img src={tick} alt='Tick'/>
						<span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
					</div>
					<div>
						<img src={tick} alt='Tick'/>
						<span>1 FREE PROGRAM FOR NEW MEMBER</span>
					</div>
					<div>
						<img src={tick} alt='Tick'/>
						<span>RELIABLE PARTNERS</span>
					</div>
				</div>
				<span style={{color: 'var(--gray)', fontWeight: 'normal'}}>OUR PARTNERS</span>
				<div className='partners'>
					<img src={nb} alt="Partner NB"/>
					<img src={adidas} alt="Partner Adidas"/>
					<img src={nike} alt="Partner Nike"/>
				</div>
			</div>
		</div>
	);
};

