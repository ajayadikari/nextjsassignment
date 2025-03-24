import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const RightComp = () => {
  return (
    <div className={styles.right}>
      <div className={styles.imageWrapper}>
        <div className={styles.img_cont}>
          <Image
            src="/assests/herobg.webp"
            layout="fill"
            objectFit="cover"
            alt="hero background"
          />
        </div>
      </div>
    </div>
  );
};

export default RightComp;