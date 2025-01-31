import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return(
        <div  className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterar(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value="">{props.placeholder}</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;