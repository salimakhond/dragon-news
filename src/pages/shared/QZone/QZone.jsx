import React from 'react';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-secondary py-4 my-4 text-center'>
            <h4>Q-Zone</h4>
            <div>
                <img src={QZone1} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;