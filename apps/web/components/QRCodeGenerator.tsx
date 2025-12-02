'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/site.config';

/**
 * QRCodeGenerator - Componente para gerar QR Code
 * 
 * Funcionalidades:
 * - Gera QR code da URL da página de depoimento
 * - Permite download do QR code
 * - Mostra a URL para referência
 * 
 * Nota: Usa a biblioteca qrcode.react para gerar o QR code
 * Você precisa instalar: npm install qrcode.react
 */
export function QRCodeGenerator() {
  const [qrUrl, setQrUrl] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Construir URL completa da página de depoimento
    const baseUrl = typeof window !== 'undefined' 
      ? window.location.origin 
      : siteConfig.urls.production || 'https://lucianogiorgetta.com.br';
    const depoimentoUrl = `${baseUrl}/depoimento`;
    setQrUrl(depoimentoUrl);
  }, []);

  if (!mounted) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <p className="text-sm text-gray-600">Carregando QR Code...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-display font-bold text-center mb-4">
        QR Code para Depoimentos
      </h2>
      
      <div className="text-center mb-4">
        {/* QR Code será renderizado aqui */}
        <div className="bg-white p-4 rounded-lg border-2 border-gray-200 inline-block">
          {/* Usando API externa para gerar QR code (alternativa sem biblioteca) */}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrUrl)}`}
            alt="QR Code"
            className="w-64 h-64"
          />
        </div>
      </div>

      <div className="text-center space-y-3">
        <p className="text-sm text-gray-600">
          Escaneie este QR code para acessar a página de depoimentos
        </p>
        
        <div className="bg-gray-50 p-3 rounded border">
          <p className="text-xs text-gray-500 mb-1">URL:</p>
          <p className="text-sm font-mono text-gray-700 break-all">
            {qrUrl}
          </p>
        </div>

        <a
          href={qrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm text-[#D4AF37] hover:underline"
        >
          Abrir página de depoimentos →
        </a>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          <strong>Dica:</strong> Você pode salvar esta imagem clicando com o botão direito 
          e selecionando "Salvar imagem como..."
        </p>
      </div>
    </div>
  );
}

