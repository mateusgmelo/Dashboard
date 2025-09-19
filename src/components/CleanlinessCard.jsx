import { useState, useMemo } from 'react'
import WarningIcon from '@mui/icons-material/Warning'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import styles from './CleanlinessCard.module.css'
import PropTypes from 'prop-types'

function parseToMs(dataHora) {
  const [data, hora] = dataHora.split(' ')
  const [dia, mes, ano] = data.split('/').map(Number)
  const [h, m, s] = hora.split(':').map(Number)
  return new Date(ano, mes - 1, dia, h, m, s).getTime()
}

const CleanlinessCard = ({ dados }) => {
  const [limite, setLimite] = useState(100)

  const placas = useMemo(() => {
    const ultimos = new Map()

    dados.forEach(dado => {
      const id = `Placa ${dado.device}`
      const ts = parseToMs(dado.dataHora)

      if (!ultimos.has(id) || ts > ultimos.get(id).ts) {
        ultimos.set(id, { dirt: dado.dirt, ts })
      }
    })

    return Array.from(ultimos.entries())
      .map(([id, { dirt }]) => ({
        id,
        dirt,
        alerta: dirt <= limite
      }))
      .sort((a, b) => a.id.localeCompare(b.id))
  }, [dados, limite])

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

      <div className={styles.listaPlacas}>
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
    </div>
  )
}

CleanlinessCard.propTypes = {
  dados: PropTypes.arrayOf(PropTypes.shape({
    device: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    dirt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    dataHora: PropTypes.string.isRequired
  })).isRequired,
}

export default CleanlinessCard
