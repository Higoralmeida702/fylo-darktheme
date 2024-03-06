import './cabecalho.css'

const Cabecalho = () => {
    return (
        <div>
            <header className="cabecalho">
                <img src="./imagens/logo.svg" alt="" />
                <nav>
                    <a href="#">Features</a>
                    <a href="#">Team</a>
                    <a href="#">Sign in</a>
                </nav>
            </header>
        </div>
    )
}

export default Cabecalho