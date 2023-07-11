import styles from "./styles.module.css"
import Image from "next/image"



function Profile() {
    return (
        <div className={styles.profileimg}>
            <Image src="/img/x4BuQ20.gif" alt="kk"
                className={styles.profile}
                width={160} height={160} />
        </div>
    )
}

export default Profile