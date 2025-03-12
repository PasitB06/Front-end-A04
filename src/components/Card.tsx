import styles from "./card.module.css"
import Image from "next/image"

export default function Card () {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image
                    src={'/img/location1.jpg'}
                    alt="Wedding Venue"
                    fill={true}
                    objectFit="cover" />
            </div>
            <div>
                <h3 className={styles.cardText}>Wedding Venue</h3>
                <h6 className={styles.cardDesc}>Weddings in barns, fields, industrial buildings, and hotels.</h6>
            </div>
        </div>
    );
}