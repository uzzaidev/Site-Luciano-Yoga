'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

/**
 * TestimonialForm - Formulário para coletar depoimentos
 * 
 * Funcionalidades:
 * - Campo de nome (será exibido apenas com iniciais)
 * - Campo de depoimento (texto)
 * - Upload de foto opcional (formato circular, estilo WhatsApp)
 * - Preview da foto antes de enviar
 * - Validação de campos
 * - Feedback visual de envio
 */
export function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: '',
    testimonial: '',
  });
  
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * Processa o nome para exibir apenas com iniciais
   * Ex: "Pedro Vitor" -> "Pedro V."
   */
  const formatNameForDisplay = (fullName: string): string => {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 1) return parts[0];
    
    // Primeiro nome + primeira letra do último nome
    const firstName = parts[0];
    const lastInitial = parts[parts.length - 1][0].toUpperCase();
    return `${firstName} ${lastInitial}.`;
  };

  /**
   * Manipula mudanças nos campos de texto
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Manipula seleção de foto
   */
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validação: apenas imagens
    if (!file.type.startsWith('image/')) {
      setErrorMessage('Por favor, selecione apenas arquivos de imagem.');
      return;
    }

    // Validação: tamanho máximo 5MB
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('A imagem deve ter no máximo 5MB.');
      return;
    }

    setPhoto(file);
    setErrorMessage('');

    // Criar preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  /**
   * Remove a foto selecionada
   */
  const handleRemovePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  /**
   * Envia o formulário
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Criar FormData para enviar arquivo
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('testimonial', formData.testimonial);
      formDataToSend.append('displayName', formatNameForDisplay(formData.name));
      
      if (photo) {
        formDataToSend.append('photo', photo);
      }

      // Enviar para API route
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar depoimento');
      }

      // Sucesso
      setStatus('success');
      setFormData({ name: '', testimonial: '' });
      setPhoto(null);
      setPhotoPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // Reset status após 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Erro ao enviar depoimento:', error);
      setStatus('error');
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Erro ao enviar depoimento. Por favor, tente novamente.'
      );
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Nome */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Seu Nome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
            placeholder="Ex: Pedro Vitor"
          />
          <p className="mt-1 text-xs text-gray-500">
            Será exibido como: <strong>{formData.name ? formatNameForDisplay(formData.name) : '...'}</strong>
          </p>
        </div>

        {/* Campo Depoimento */}
        <div>
          <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
            Seu Depoimento *
          </label>
          <textarea
            id="testimonial"
            name="testimonial"
            value={formData.testimonial}
            onChange={handleChange}
            required
            rows={6}
            minLength={20}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all resize-none"
            placeholder="Compartilhe sua experiência com as aulas de Yôga..."
          />
          <p className="mt-1 text-xs text-gray-500">
            Mínimo de 20 caracteres
          </p>
        </div>

        {/* Upload de Foto (Opcional) */}
        <div>
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
            Foto (Opcional)
          </label>
          
          {!photoPreview ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#D4AF37] transition-colors">
              <input
                type="file"
                id="photo"
                ref={fileInputRef}
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
              <label
                htmlFor="photo"
                className="cursor-pointer flex flex-col items-center"
              >
                <svg
                  className="w-12 h-12 text-gray-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  Clique para adicionar uma foto
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  JPG, PNG ou GIF (máx. 5MB)
                </span>
              </label>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              {/* Preview circular da foto */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#D4AF37] flex-shrink-0">
                <Image
                  src={photoPreview}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 font-medium">
                  {photo?.name}
                </p>
                <button
                  type="button"
                  onClick={handleRemovePhoto}
                  className="text-sm text-red-600 hover:text-red-700 mt-1"
                >
                  Remover foto
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mensagem de erro */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {errorMessage}
          </div>
        )}

        {/* Botão de envio */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed py-3"
        >
          {status === 'sending' 
            ? 'Enviando...' 
            : status === 'success' 
            ? 'Depoimento Enviado! ✓' 
            : 'Enviar Depoimento'}
        </button>

        {/* Mensagem de sucesso */}
        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm text-center">
            Obrigado pelo seu depoimento! Ele será revisado e poderá aparecer no site em breve.
          </div>
        )}
      </form>
    </div>
  );
}

