import Image from "next/image"
import styles from "./style.module.css"



function Background() {
    return (
        <div className={styles.background}>
            <Image src="/img/cloud.svg" alt="imagemalta" width={200} height={200} />
            <Image src="/img/cloud.svg" alt="imagemalta" width={200} height={200} />
            <Image src="/img/cloud.svg" alt="imagemalta" width={200} height={200} />
            <Image src="/img/cloud.svg" alt="imagemalta" width={200} height={200} />
        </div>
    )
}


export default Background