

function renderizar_menu() {
    const menu = document.createElement("nav");
    menu.className = "menu-lateral";

    menu.innerHTML =
        ` <div class="btn-expandir">
                <i class="bi bi-list"></i>
            </div>

            <div class="menu-icon">☰</div>
            <br><br>
            <ul>
                <li class="item-menu">
                    <a href="../Public/pagChat.html">
                        <span class="icon"><i class="acesso-chat"><img src="../Assets/imagens/barras/chat.png"
                                    alt=""></i></span>
                        <span class="txt-link"> Chat </span>
                    </a>
                </li>
                <br>
                <li class="item-menu">
                    <a href="../Public/pagGestaoRotas.html">
                        <span class="icon"><i class="acesso-rotas"><img src="../Assets/imagens/barras/mapa.png"
                                    alt=""></i></span>
                        <span class="txt-link"> Mapas </span>
                    </a>
                </li>
                <br>
                <li class="item-menu">
                    <a href="../Public/pagGeralDashboard.html">
                        <span class="icon"><i class="acesso-dash"><img src="../Assets/imagens/barras/home.png"
                                    alt=""></i></span>
                        <span class="txt-link"> Home </span>
                    </a>
                </li>
                <br>
                <li class="item-menu">
                    <a href="../Public/pagMonitora.html">
                        <span class="icon"><i class="acesso-desemp"><img src="../Assets/imagens/barras/desempenho.png"
                                    alt=""></i></span>
                        <span class="txt-link"> Monitoramento </span>
                    </a>
                </li>
                <br>
                <li class="item-menu">
                    <a href="../Public/pagUsuario.html">
                        <span class="icon"><i class="acesso-user"><img src="../Assets/imagens/barras/user.png"
                                    alt=""></i></span>
                        <span class="txt-link"> Usuario </span>
                    </a>
                </li>
            </ul>`;

    const container = document.getElementById('container');
    if (container) {
        container.prepend(menu);

        const menuIcon = document.querySelector('.menu-icon');
        const menuLateral = document.querySelector('.menu-lateral');

        menuIcon.addEventListener('click', () => {
            menuLateral.classList.toggle('aberto');
        });

        const menu_icon = document.querySelector('.menu-icon')
        const midia_pequena = window.matchMedia('(max-width: 900px)')

        function escondeHamburguer(e) {

            if (e.matches) {
                menu_icon.style.display = 'none';
            }
            else {
                menu_icon.style.display = 'inline-block';
            }
        }

        escondeHamburguer(midia_pequena);
        midia_pequena.addEventListener('change', escondeHamburguer);


    }
}



document.addEventListener("DOMContentLoaded", renderizar_menu);