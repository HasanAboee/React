import styles from './main-header.module.css'
import Link from'next/link'
function MainHeader(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>NextEvents</Link>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href='/events'>Brows All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainHeader;