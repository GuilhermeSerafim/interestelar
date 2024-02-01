import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="footer footer-bg">
            <section>
                <ul>
                    <li>
                        <a href="https://www.youtube.com/channel/UCDwZfT1FeLccSRAgWubJHng" target="blank">
                            <img src="./imagens/Youtube.png" alt="Youtube" />
                        </a>
                    </li>
                    <li>
                        <a href="wa.link/8dnjl7" target="blank">
                            <img src="./imagens/Whatsapp.png" alt="Whatsapp" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/iamguiler/" target="blank">
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

export default Rodape;
