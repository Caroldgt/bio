import styles from "./styles.module.css"
import Image from "next/image"



function Profile() {
    return (
        <div className={styles.profileimg}>
            <Image src="/img/Ellipse 1.jpg" alt="kk"
                className={styles.profile}
                width={160} height={160} />
        </div>
    )
}

export default Profile