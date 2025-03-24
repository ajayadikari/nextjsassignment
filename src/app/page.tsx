import Image from "next/image";
import LeftComp from '../components/left/LeftComp'
import RightComp from '../components/right/RightComp'
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={`${styles.parent}`}>
    <LeftComp/>
    <RightComp/>
    </div>
  );
}

