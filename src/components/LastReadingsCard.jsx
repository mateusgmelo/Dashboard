import styles from './LastReadingsCard.module.css'
import PropTypes from 'prop-types';

const LastReadingsCard = ({ voltage, temperature }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>Tensão</h3>
        <div className={styles.value}>
          <p>{voltage}</p><p>V</p>
        </div>
      </div>
      <div className={styles.card}>
        <h3>Temperatura</h3>
        <div className={styles.value}>
          <p>{temperature}</p><p>°C</p>
        </div>
      </div>
    </div>
  )
}

export default LastReadingsCard

//esse codigo evita que o vs code fique retornando erro por causa dos props
LastReadingsCard.propTypes = {
  voltage: PropTypes.bool.isRequired,
  temperature: PropTypes.bool.isRequired,
};