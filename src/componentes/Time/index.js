import Colaborador from '../Colaborador';
import './Time.css'

// const Time = (props) => {
//     return(
//         (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSecundaria}}>
//             <h3 style={{borderColor: props.corPrimaria }}>{props.nome}</h3>
//             <div className='colaboradores'>
//                 {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo}  imagem={colaborador.imagem} />)}
//             </div>
//         </section>
//     )
// }
const Time = ({ time, colaboradores, aoDeletar }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} />
                })}
            </div>
        </section>
    )
}

export default Time;