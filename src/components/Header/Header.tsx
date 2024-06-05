import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <p>
          <span className={styles.firstLetters}>Gestionnaire</span>
        </p>
        <p>
          <span className={styles.lastLetters}>Note</span>
        </p>
      </div>
    </header>
  );
}
