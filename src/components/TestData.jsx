import PropTypes from 'prop-types';
function TestData({dados}) {
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

//esse codigo evita que o vs code fique retornando erro por causa dos props
TestData.propTypes = {
  dados: PropTypes.bool.isRequired,
};