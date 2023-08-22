https://github.com/rafaelmoura23/PWBE-DEVTarde.git   - Backend Página de Cadastro

16/08/2023 -- 15:14
- Protótipo da página Home no Figma concluída
- Início do desenvolvimento do site

- Inicialização do projeto do site, link para o Live Share: https://prod.liveshare.vsengsaas.visualstudio.com/join?C9A1EDF9D7E2E8E7406978AE02C39914CA86

Mais vendidos
- O Alquimista
- O Codigo da Vinci
- 1984
- O Pequeno Príncipe
- Mais Esperto Que o Diabo
- A Revolução dos Bichos
- Um Estudo em Vermelho - Sherlock Holmes
- Viagem Ao Centro da Terra
- Fundação
- A Culpa é Das Estrelas
- Senhor dos Anéis
- Imperfeitos
- Vermelho, branco e sangue azul
- Mindset
- Os Sete Maridos


Literatura Brasileira

- Dom Casmurro
- O Guarani
- Capitães de Areia
- Livro do Desassossego
- Mar Absoluto
- O Alquimista
- O Cortiço
- Quarto do Despejo
- Um Conto de Duas Cidades
- Vidas Secas
- Auto da Compadecida
- O Meu Pé de Laranja Lima
- Sobrevivendo no Inferno
- Iracema
- O Menino no Espelho


Ficção

- Duna1
- Duna2
- Duna3
- Duna4
- Duna5
- Harry Potter Pedra Filosofal
- Harry Potter e a Câmara Secreta
- Harry Potter e o Prisioneiro de Azkaban
- Harry Potter e o Cálice de Fogo
- Harry Potter e a Ordem da Fênix
- Percy Jackson Ladrão de Raios
- Percy Jackson Mar de Monstros
- Percy Jackson a Maldição do Titã
- Blade Runner
- Neuromancer


17/08 -- 13:15
- Link do Live Share: https://prod.liveshare.vsengsaas.visualstudio.com/join?A058527A7F96C3320E15DA37820567474F5A

-link do live share2: https://prod.liveshare.vsengsaas.visualstudio.com/join?3CF814B5144DD17E1C00283901388A365A5A


21/08 -- 13:45
- Link do LiveShare: https://prod.liveshare.vsengsaas.visualstudio.com/join?024B6301ED06B46E4F63D208DCA3B964884C

https://prod.liveshare.vsengsaas.visualstudio.com/join?B7063B72F6941C6D20F7937A6C557AF8D47F



style - contato

  .centralizar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }
  
  .formulario {
    display: flex;
    align-items: center;
    border-radius: 20px;
    background-color: rgb(241, 240, 240);
  }
  
  .formImg img {
    max-width: 100%;
    height: auto;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  
  .formTxt {
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    height: 475px;
    color: rgb(0, 0, 0);
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
  }
  
  .formulario .formTxt h2 {
    display: flex;
    justify-content: center;
    font-family: "Arial Black", Gadget, sans-serif;
    color: rgb(97, 97, 97);
  }
  
  .formTxt #lenviar {
    margin-top: 10px;
    border-radius: 17px;
    padding: 9px;
    border-color: rgb(224, 224, 224);
    border: rgb(155, 155, 155);
    color: rgb(0, 0, 0);
    background: white;
}

.formTxt #lenviar:hover {
    transition: 0.35s;
    border-color: #20cdff;
    background-color: #20cdff;
    background: #20cdff;
    color: rgb(255, 255, 255);
}
  
  .formTxt #lnome {
    border-radius: 17px;
    border-color: rgb(184, 184, 184);
    padding: 8px;
  }
  
  .formTxt #lemail {
    border-radius: 17px;
    border-color: rgb(184, 184, 184);
    padding: 8px;
  }

  .formTxt #lcomentario {
    border-radius: 17px;
    border-color: rgb(184, 184, 184);
    padding: 8px;
}

.formTxt .socialMediaIcons {
    display: flex;
    align-content: flex-end;
}

.socialMediaIcons {
    display: flex;
    justify-content: space-evenly;
}


html - contato

<section>
        <div class="centralizar">
            <div class="formulario">
                <div class="formImg" style="height: 479px;">
                    <img src="img/contato.png" class="img-fluid" alt="">
                </div>
                <div class="formTxt">
                    <h2>Contate-nos</h2>
                    <input type="text" id="lnome" name="nome" size="23" placeholder="Insira seu nome de usuário">
                    <input type="email" id="lemail" name="email" size="23" placeholder="Insira seu email">
                    <textarea name="comentario" id="lcomentario" cols="30" rows="5"
                        placeholder="Insira seu comentário"></textarea>
                    <input type="submit" id="lenviar" value="Entrar" name="enviar" size="10">
                    <div class="socialMediaIcons">
                        <a class="twitter" href="x.com">
                            <img src="img/twitter.png" alt="" style="height: 20px; width: 20px;">
                        </a>
                        <a class="instagram" href="instagram.com">
                            <img src="img/instagram.png" alt="" style="height: 20px; width: 20px;">
                        </a>
                        <a class="facebook" href="facebook.com">
                            <img src="img/facebook.png" alt="" style="height: 20px; width: 20px;">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
