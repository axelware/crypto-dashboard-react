// src/api/coingecko.js

const BASE_URL = "https://api.coingecko.com/api/v3";

/**
 * Busca o histórico de mercado de uma moeda específica (preço, volume, capitalização).
 * @param {string} coinId - O ID da moeda (ex: 'bitcoin').
 * @param {number} days - O período de tempo (ex: 7 para 7 dias).
 */
export async function fetchMarketChart(
  coinId = 'bitcoin',
  days = 7
) {
  try {
    const response = await fetch(
      `${BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
    );

    if (!response.ok) {
        // Tratamento de erro específico para Rate Limit (429)
        if (response.status === 429) {
            console.error("ERRO 429: Rate Limit Excedido. Espere um minuto.");
            throw new Error(`Rate Limit Excedido (429). Tente novamente em breve.`);
        }
        if (response.status >= 400 && response.status < 500) {
             console.error(`ERRO do Cliente: ${response.status} - Verifique a URL/ID da moeda.`);
        }
        
      throw new Error(`Erro ao buscar dados: ${response.statusText} (${response.status})`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Falha na chamada da API:", error.message);
    return null;
  }
}