import countries from '../../../data/countries';
import styles from '../../../style/CountryPage.module.css';

type CountryPageProps = {
    params: { country_name: string };
};

export default function CountryPage({ params }: CountryPageProps) {
    const { country_name } = params;
    const country = countries[country_name];

    if (!country) {
        return <h1 className={styles.title}>Country not found.</h1>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{country.name}</h1>
            <p className={styles.details}>Population: {country.population}</p>
            <p className={styles.details}>Capital: {country.capital}</p>
            <a href="/" className={styles.backLink}>
                Back to Country List
            </a>
        </div>
    );
}
