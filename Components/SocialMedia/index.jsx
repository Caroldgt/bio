import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.css"


function SocialMedia({ image = "",
    text = "",
    link = "" }) {
    return (
        <div className={styles.border}>
            <Link href={link} className={styles.social} target="_blank" >
                <Image className={styles.image} src={image} width={37} height={37} alt="kk" />
                <div>
                    <span className={styles.text}>{text}</span>
                </div>
            </Link>
        </div>
    )
}

export default SocialMedia