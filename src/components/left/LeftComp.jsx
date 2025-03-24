import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from '../ui/button';
import styles from './styles.module.css';


const LeftComp = () => {
    return (
        <div className={styles.left}>
            <p>ABOUT US</p>
            <div>
                <h1>Shaping the Next</h1>
                <h1>Generation of HR <span>Tech</span></h1>
                <h1><span className='other'>Recruitment.</span></h1>
            </div>
            <p>At Everything Talent, we help you launch your recruitment into a new dimension.</p>
            <Button className={styles.btn}>
                <span>Start for Free Today</span>
                <FaArrowRightLong className={styles.right_arrow}/>
                <div className={styles.moving_display}>

                </div>
            </Button>
        </div>
    );
};

export default LeftComp;