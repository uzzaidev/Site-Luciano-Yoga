'use client';

import { useState } from 'react';

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Aqui você pode integrar com um serviço de email (Resend, SendGrid, etc)
            // Por enquanto, vou simular o envio
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setStatus('success');
            setFormData({ name: '', phone: '', email: '', message: '' });

            // Reset status após 3 segundos
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="w-full flex justify-center">
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl" style={{ margin: '0 auto' }}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome Completo *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                        placeholder="Seu nome"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefone/WhatsApp *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                        placeholder="(51) 99999-9999"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-mail *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                        placeholder="seu@email.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensagem *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all resize-none"
                        placeholder="Conte-me um pouco sobre você e seus objetivos com o Yôga..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Enviado! ✓' : 'Enviar Mensagem'}
                </button>

                {status === 'error' && (
                    <p className="text-red-500 text-sm text-center">
                        Erro ao enviar. Por favor, tente novamente ou entre em contato via WhatsApp.
                    </p>
                )}
            </form>
        </div>
    );
}
