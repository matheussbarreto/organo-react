import Colaborador from '../Colaborador';
import './Time.css'
import hetToRgba from 'hex-to-rgba';

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
const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hetToRgba(time.cor, '0.6') }}>
            <input type='color' className='input-cor' onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador
                            key={indice}
                            colaborador={colaborador}
                            corDeFundo={time.cor}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />

                    )
                })}
            </div>
        </section>
    )
}

export default Time;