import Link from 'next/link';
import countries from '../data/countries';
import styles from '../style/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Country List</h1>
      <ul className={styles.list}>
        {Object.keys(countries).map((countryKey) => (
          <li key={countryKey} className={styles.listItem}>
            <Link href={`/country/${countryKey}`}
              className={styles.link}>{countries[countryKey].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
