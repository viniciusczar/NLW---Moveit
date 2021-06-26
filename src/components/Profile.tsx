import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/viniciusczar.png" alt="Vinícius Cordeiro"/>
        <div>
            <strong>Vinícius Cordeiro</strong>
            <p>
                <img src="icons/level.svg" alt="Level 1" />
                Level 1
            </p>
        </div>
        </div>
    );
}