import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeDoTime, setNomeDoTime] = useState('');
    const [corDoTime, setCorDoTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Times"
                    placeholder="Selecione um time"
                    itens={times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Criar time
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault();
                cadastrarTime({ nome: nomeDoTime, cor: corDoTime })
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <p><em>*O time ficará visível quando tiver pelo menos um colaborador cadastrado</em></p>
                <Campo
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeDoTime}
                    aoAlterar={valor => setNomeDoTime(valor)}
                />
                <Campo
                    obrigatorio
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corDoTime}
                    aoAlterar={valor => setCorDoTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;