<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="login.css">
</head>

<body>

    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">

                    <?php
                    if (isset($_SESSION['nao_autenticado'])) :
                    ?>
                        <div class="notification is-danger" id="loginErro">
                            <p>ERRO: Usuário ou senha inválidos.</p>
                        </div>
                    <?php
                    endif;
                    unset($_SESSION['nao_autenticado']);
                    ?>

                    <div class="wrapper">
                        <form action="login.php" method="POST">
                            <h1>Login</h1>
                            <div class="input-box">
                                <input name="usuario" name="text" placeholder="Username" required>
                                <i class='bx bxs-user'></i>
                            </div>
                            <div class="input-box">
                                <input type="password" name="senha" placeholder="Password" required>
                                <i class='bx bxs-lock-alt'></i>
                            </div>

                            <div class="remember-forgot">
                                <label> <input type="checkbox">Remember me</label>
                                <a href="#">Forgot Password?</a>
                            </div>

                            <button type="submit" class="btn">Login</button>

                            <div class="register-link">
                                <p>Don't have an account?<a href="cadastro.php">Register</a> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

</body>

</html>