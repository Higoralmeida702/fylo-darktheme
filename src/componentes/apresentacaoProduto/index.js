import './apresentacaoProduto.css'

const ApresentacaoProduto = () => {
    return (
        <div className="apresentacaoProduto">
            <img src="./imagens/illustration-intro.png" alt="" />
            <div className="descricaoProduto">
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button type="button">Get Started</button>
            </div>
            <section className="funcionalidadesProduto">
                <div className="organizacaoProduto">
                    <img src="./imagens/icon-access-anywhere.svg" alt="" />
                    <h1>Access your files, anywhere</h1>
                    <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                </div>
                <div className="organizacaoProduto">
                    <img src="./imagens/icon-security.svg" alt="" />
                    <h1>Security you can trust</h1>
                    <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                </div>
                <div className="organizacaoProduto">
                    <img src="./imagens/icon-collaboration.svg" alt="" />
                    <h1>Real-time collaboration</h1>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required</p>
                </div>
                <div className="organizacaoProduto">
                    <img src="./imagens/icon-any-file.svg" alt="" />
                    <h1>Store any type of file</h1>
                    <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                </div>
            </section>
            <section className="stayProductive">
                <img src="./imagens/illustration-stay-productive.png" alt="" />
                <div className="stayProdutiveDescricao">
                    <h1>Stay productive, <br/>wherever you are</h1>
                    <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required</p>
                    <a href="#">See how Fylo works</a>
                </div>
            </section>
        </div>
    )
}

export default ApresentacaoProduto