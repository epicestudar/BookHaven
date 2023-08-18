<?php
include('verifica_login.php');
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel</title>
    <link rel="stylesheet" href="css/painel.css">
</head>
<body>

<h2>Seja Bem vindo(a) <?php echo $_SESSION['nome'];?></h2>
<h2><a href="logout.php">Sair</a></h2>

<footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <h2>BookHaven</h2>
                <p>Onde sonhos ganham forma!</p>

                <div id="footer_social_media">
                    <a href="https://www.instagram.com" class="footer-link" id="instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://twitter.com" class="footer-link" id="twitter">
                        <i class="fa-brands fa-twitter"></i>
                    </a>

                    <a href="https://facebook.com" class="footer-link" id="facebook">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </div>


            </div>

            <ul class="footer-list">
                <li>
                    <h3>Blog</h3>
                </li>

                <li>
                    <a href="" class="footer-link">Tech</a>
                </li>

                <li>
                    <a href="#" class="footer-link">Adventures</a>
                </li>

                <li>
                    <a href="#" class="footer-link">Musics</a>
                </li>
            </ul>

            <ul class="footer-list">
                <li>
                    <h3>Products</h3>
                </li>

                <li>
                    <a href="#" class="footer-link">App</a>
                </li>

                <li>
                    <a href="#" class="footer-link">Desktop</a>
                </li>

                <li>
                    <a href="#" class="footer-link">Cloud</a>
                </li>
            </ul>

            <div id="footer_subscribe">
                <h3>Subscribe</h3>
                <p>Coloque o seu e-mail para ser notificado sobre nossos novos eventos</p>

                <div id="input_group">
                    <input type="email" id="email">
                    <button><i class="fa-regular fa-envelope"></i></button>
                </div>
            </div>

        </div>

        <div id="footer_copyright">
            BookHaven &#169
            2023 all rights reserved
        </div>
    </footer>
    <script src="js/home.js"></script>
    


</body>
</html>





