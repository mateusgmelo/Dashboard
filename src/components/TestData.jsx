import { useEffect, useState } from 'react'
import api from '../services/api'

function TestData() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')

    async function fetchDados() {
      try {
        const response = await api.get('/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setDados(response.data.dados)
      } catch (err) {
        console.error("Erro ao buscar dados:", err)
      }
    }

    // Buscar imediatamente
    fetchDados()

    // Buscar a cada 5 segundos
    const interval = setInterval(fetchDados, 5000)

    // Limpar intervalo ao desmontar o componente
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h2>Dados do Usuário</h2>
      <ul>
        {Array.isArray(dados) && dados.length > 0 ? (
        dados.map((item, index) => (
        <li key={index}>{JSON.stringify(item)}</li>
        ))
        ) : (
        <li>Nenhum dado disponível</li>
  )}
</ul>

    </div>
  )
}

export default TestData;
