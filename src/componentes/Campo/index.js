import './Campo.css'
// Use arrow function
const Campo = ({type = 'text', label, placeholder, valor, aoAlterar, obrigatorio = false}) => {

    // const aoDigitar = (evento) => {
    //     props.aoAlterar(evento.target.value);
    // }
    
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={evento => aoAlterar(evento.target.value)} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo;