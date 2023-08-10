import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.css"


function SocialMedia({ image = "",
    text = "",
    link = "",
    textname = "" }) {
    return (
        <div className={styles.socialmedia}>
            <span className={styles.textname}>{textname}</span>
            <div className={styles.border}>
                <Link href={link} className={styles.social} target="_blank" >
                    <div>
                        <span className={styles.text}>{text}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SocialMedia