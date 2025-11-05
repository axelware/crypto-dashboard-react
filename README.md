# 🌟 Crypto Dashboard React

Um dashboard de visualização de dados reativo e interativo construído com **React** e **CSS Clássico**, focado em fornecer análise histórica e métricas de mercado para as principais criptomoedas (Bitcoin, Ethereum, etc.).

Este projeto é uma demonstração completa de proficiência em React moderno, gerenciamento de estado complexo e integração de API externa para visualização de dados.

---

## 🚀 Funcionalidades Chave

* **Análise Histórica e em Tempo Real:** Visualização de preço, capitalização de mercado e volume para diversos períodos (24h, 7 dias, 1 ano, etc.), com dados obtidos da API CoinGecko.
* **Gráfico Combinado (Multi-Eixo):** Utiliza `Chart.js` para renderizar um gráfico dual (Preço em linha e Volume em barras), permitindo uma análise complexa de dados em uma única interface.
* **Controles Dinâmicos:** Permite que o usuário alterne dinamicamente entre diferentes moedas e períodos de tempo, acionando novas chamadas à API de forma reativa.
* **Formatação Inteligente:** Implementação de lógicas de formatação de números para exibir valores grandes (Capitalização, Volume) em formatos concisos (ex: `$1.23T`), otimizando a usabilidade nos Info Cards.
* **Experiência do Usuário (UX) Otimizada:** Implementação de um **Loading Skeleton** animado em CSS, que proporciona um feedback visual profissional enquanto a aplicação aguarda a resposta da API.

---

## ⚙️ Stack Tecnológico

* **Frontend Principal:** **React** (Hooks: `useState`, `useEffect`, `useMemo`)
* **Visualização de Dados:** **Chart.js** (com `react-chartjs-2`)
* **Estilização:** **CSS Simples e Responsivo**
* **API:** **CoinGecko API**
* **Build Tool:** **Vite**

---

## 💡 Desafios Técnicos e Soluções

Esta seção destaca o raciocínio de engenharia e as decisões tomadas:

1.  **Otimização de Performance:**
    * Uso do Hook `useMemo` para processar e formatar os dados brutos da API para o formato ideal do `Chart.js`, garantindo que o dashboard permaneça rápido e eficiente a cada renderização.
2.  **Gerenciamento de Assincronicidade Reativa:**
    * Implementação do Hook `useEffect` com uma matriz de dependência refinada (`[selectedCoin, selectedDays]`) para buscar novos dados **apenas** quando o estado da moeda ou do período muda, gerenciando de forma eficiente a reatividade da aplicação.
3.  **Tratamento de API Externa (Rate Limit):**
    * Criação de lógica para capturar e exibir falhas na API, incluindo a detecção específica do erro **`429 Too Many Requests`** (Rate Limit), oferecendo feedback claro ao usuário.
4.  **Layout e Design:**
    * Desenvolvimento de um layout totalmente responsivo usando CSS Grid e Flexbox, garantindo a adaptação dos Info Cards e do gráfico em dispositivos móveis.

---

## 🚀 Como Rodar o Projeto Localmente

Certifique-se de ter o Node.js instalado.

1.  **Clone o Repositório:**
    ```bash
    git clone [SUA_URL_DO_REPOSITORIO]
    cd crypto-dashboard-react
    ```

2.  **Instale as Dependências:**
    ```bash
    npm install
    # Instale também as dependências de gráficos se não estiverem no package.json
    # npm install chart.js react-chartjs-2
    ```

3.  **Execute o Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    ```

O dashboard estará disponível em `http://localhost:5173`.

---

## 🔗 Links

| Tipo | Status | Link (Substitua!) |
| :--- | :--- | :--- |
| **🔗 Deploy Online** | 🌐 Online | `[COLOQUE A URL PÚBLICA DO VERCEL/NETLIFY AQUI]` |
| **📁 Repositório no GitHub** | 💾 Código-Fonte | `[COLOQUE O LINK PARA ESTE REPOSITÓRIO]` |
