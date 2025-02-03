import './ListaSuspensa.css';

const ListaSuspensa = ({label, itens,  valor, aoAlterar, placeholder, obrigatorio = false}) => {
    return(
        <div  className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterar(evento.target.value)} required={obrigatorio} value={valor}>
                <option value="">{placeholder}</option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;