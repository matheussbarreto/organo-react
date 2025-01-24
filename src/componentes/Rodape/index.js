import './Rodape.css';

const Rodape = () => {
    return(
        <footer className='footer'>
            <section className='social'>
                <a  href='http://facebook.com'> <img src='/imagens/fb.png' /></a>
                <a  href='http://x.com'> <img src='/imagens/tw.png' /></a>
                <a  href='http://instagram.com'> <img src='/imagens/ig.png' /></a>
            </section>
            <section>
                <img src='/imagens/logo.png' />
            </section>
            <section>
                <span>Desenvolvido por Matheus Barreto + Alura</span>
            </section>
        </footer>
    )
}

export default Rodape;