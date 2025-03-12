import styles from './card.module.css'
import Image from 'next/image'

export default function Card ({ venueName, imgSrc }:{ venueName:string, imgSrc:string}) {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    objectFit='cover' />
            </div>
            <div className={styles.cardtext}>{venueName}</div>
        </div>
    );
}