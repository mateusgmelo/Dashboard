import { useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import styles from './CleanlinessCard.module.css'
import PropTypes from 'prop-types';

const CleanlinessCard = ({ dados }) => {
  const [limite, setLimite] = useState(100)

  // Agrupar últimas leituras por device
  const ultimosPorPlaca = {}
  dados.forEach(dado => {
    const id = `Placa ${dado.device}`
    if (!ultimosPorPlaca[id] || new Date(dado.dataHora) > new Date(ultimosPorPlaca[id].dataHora)) {
      ultimosPorPlaca[id] = dado
    }
  })

  const placas = Object.entries(ultimosPorPlaca).map(([id, dado]) => ({
    id,
    dirt: dado.dirt,
    alerta: dado.dirt <= limite
  }))

  return (
    <div className={styles.cleanlinessCard}>
      <h2>Sujidade das placas</h2>

      <div className={styles.limiteInput}>
        <label>
          Limite aceitável:
          <input
            type="number"
            value={limite}
            onChange={(e) => setLimite(Number(e.target.value))}
            min={0}
            step={0.1}
          />
        </label>
      </div>

      {placas.map((placa) => (
        <div key={placa.id} className={styles.placa}>
          <span>{placa.id}: {placa.dirt} Lux</span>
          {placa.alerta ? (
            <WarningIcon className={styles.warningIcon} />
          ) : (
            <CheckCircleIcon className={styles.successIcon} />
          )}
        </div>
      ))}
    </div>
  )
}

export default CleanlinessCard

CleanlinessCard.propTypes = {
  dados: PropTypes.bool.isRequired,
};