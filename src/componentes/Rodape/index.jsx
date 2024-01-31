import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="footer footer-bg">
            <section>
                <ul>
                    <li>
                        <a href="#" target="_blank">
                            <img src="./imagens/fb.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src="./imagens/tw.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src="./imagens/ig.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="./imagens/buraco-negro.png" alt="Buraco negro" />
            </section>
            <section>
                <p>
                    Desenvolvido por Guilherme.
                </p>
            </section>
        </footer>
    )
}

export default Rodape