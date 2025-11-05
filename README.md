🌟 Crypto Dashboard React
Um dashboard de visualização de dados reativo construído com React, focado em fornecer análise histórica e métricas de mercado em tempo real para as principais criptomoedas (Bitcoin, Ethereum, Solana, etc.).

Este projeto demonstra proficiência em React moderno, gerenciamento de estado complexo e integração de API externa para visualização de dados.

🚀 Funcionalidades Chave
Análise Histórica e em Tempo Real: Visualização de preço, capitalização de mercado e volume para diversos períodos (24h, 7 dias, 1 ano, etc.).

Gráfico Combinado: Utiliza Chart.js para renderizar um gráfico dual (Preço em linha e Volume em barras), permitindo uma análise complexa de dados em uma única interface.

Controles Interativos: Permite que o usuário alterne dinamicamente entre diferentes moedas e períodos de tempo, acionando novas chamadas à API de forma reativa.

Formatação Inteligente: Implementação de lógicas de formatação de números para exibir valores de Capitalização de Mercado e Volume em formatos concisos (ex: $1.23T para Trilhões), garantindo usabilidade nos cards de informação.

⚙️ Tecnologias Utilizadas
Frontend Principal: React (Hooks: useState, useEffect, useMemo)

Visualização de Dados: Chart.js (com react-chartjs-2)

Estilização: CSS Simples (focado em responsividade e design limpo)

Comunicação com API: Fetch API (para consumo da API CoinGecko)

💡 Desafios Técnicos Resolvidos
Esta seção é a mais importante, pois mostra seu raciocínio como desenvolvedor:

Otimização de Performance (useMemo): Utilização do useMemo para processar e formatar os dados brutos da API para o formato ideal do Chart.js, evitando recálculos desnecessários e garantindo que o dashboard permaneça rápido.

Gerenciamento de Assincronicidade: Implementação do Hook useEffect para buscar novos dados apenas quando o estado da moeda ou do período muda ([selectedCoin, selectedDays]), evitando loops de renderização infinitos.

Tratamento de Erros e UX: Criação de um Loading Skeleton para manter o usuário engajado durante o carregamento de dados e implementação de lógica para capturar e exibir falhas na API (incluindo a detecção do erro 429 Rate Limit).

Componentização e Escalabilidade: Arquitetura limpa com componentes reutilizáveis (InfoCard, DashboardControls), facilitando a adição de novas moedas e funcionalidades no futuro.
