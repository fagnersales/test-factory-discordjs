## O que é o bots-manager?

Sistema que lida com a execução dos bots, os mantém online, abre espaço para utilização dos comandos e que deve ser aberto para o lado de fora.

- Executar todos os bots disponíveis
- Checar quais comandos cada um dos bots tem acesso
- Receber comandos vindo de usuários
- Criar rotas de API para configuração dos bots

- [x] Criar um parametro no banco de dados para dizer se aquele bot deve ser ligado no momento de build ou não.
- [x] Função para iniciar todos os bots salvos no banco de dados.
- [ ] Gerenciar comandos salvos no banco de dados.
- [ ] Fazer base para comandos com informações úteis para analytics.
- [ ] `/api/bots/[id]/auth`
  - [ ] `POST`: Alterna entre ligar e desligar o bot.
    - [ ] body: { BOT_TOKEN }
- [ ] `/api/bots/[id]/commands`
  - [ ] `POST`: Define quais comandos o bot terá.
    - [ ] body: { COMMANDS }
  - [ ] `GET`: Busca quais comandos o bot tem.
    - [ ] { COMMANDS }  