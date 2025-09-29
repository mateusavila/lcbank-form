// convertMobileUrl.test.ts
import { describe, it, expect } from 'vitest';
import { convertMobileUrl } from "../src/convertMobileUrl"

describe('convertMobileUrl', () => {
  describe('casos básicos', () => {
    it('deve retornar string vazia quando mobileURL é undefined', () => {
      const result = convertMobileUrl(undefined, {});
      expect(result).toBe('');
    });

    it('deve retornar string vazia quando mobileURL é vazia', () => {
      const result = convertMobileUrl('', {});
      expect(result).toBe('');
    });

    it('deve retornar a URL original quando não há placeholders', () => {
      const url = 'https://wa.me/5511999999999';
      const result = convertMobileUrl(url, {});
      expect(result).toBe(url);
    });
  });

  describe('substituição de placeholders', () => {
    it('deve substituir [[NAME]] pelo campo name', () => {
      const url = 'https://wa.me/5511999999999?text=Olá [[NAME]]';
      const fields = { name: 'João Silva' };
      const result = convertMobileUrl(url, fields);
      expect(result).toBe('https://wa.me/5511999999999?text=Ol%C3%A1%20Jo%C3%A3o%20Silva');
    });

    it('deve substituir [[SITE]] pelo campo page_title', () => {
      const url = 'https://wa.me/5511999999999?text=Site: [[SITE]]';
      const fields = { page_title: 'Meu Site' };
      const result = convertMobileUrl(url, fields);
      expect(result).toBe('https://wa.me/5511999999999?text=Site%3A%20Meu%20Site');
    });

    it('deve substituir [[CPF]] pelo campo cpf', () => {
      const url = 'https://wa.me/5511999999999?text=CPF: [[CPF]]';
      const fields = { cpf: '123.456.789-00' };
      const result = convertMobileUrl(url, fields);
      expect(result).toBe('https://wa.me/5511999999999?text=CPF%3A%20123.456.789-00');
    });

    it('deve substituir [[PHONE]] formatando corretamente', () => {
      const url = 'https://wa.me/[[PHONE]]?text=Olá';
      const fields = { phone: '(11) 99999-9999' };
      const result = convertMobileUrl(url, fields);
      expect(result).toBe('https://wa.me/5511999999999?text=Ol%C3%A1');
    });

  });

  describe('múltiplos placeholders', () => {
    it('deve substituir múltiplos placeholders diferentes', () => {
      const url = 'https://wa.me/[[PHONE]]?text=Olá [[NAME]], CPF: [[CPF]]';
      const fields = {
        name: 'Maria',
        phone: '(11) 98888-7777',
        cpf: '111.222.333-44'
      };
      const result = convertMobileUrl(url, fields);
      expect(result).toBe('https://wa.me/5511988887777?text=Ol%C3%A1%20Maria%2C%20CPF%3A%20111.222.333-44');
    });
  });

  describe('encode URI', () => {
    it('deve aplicar encodeURIComponent apenas no texto após ?text=', () => {
      const url = 'https://wa.me/5511999999999?text=Olá mundo & teste';
      const result = convertMobileUrl(url, {});
      expect(result).toBe('https://wa.me/5511999999999?text=Olá mundo & teste');
    });

    it('não deve aplicar encode na parte da URL antes de ?text=', () => {
      const url = 'https://wa.me/5511999999999?text=teste';
      const result = convertMobileUrl(url, {});
      expect(result).toBe('https://wa.me/5511999999999?text=teste');
    });

    it('deve preservar caracteres especiais na base da URL', () => {
      const url = 'https://exemplo.com/página-especial?text=texto para encode';
      const result = convertMobileUrl(url, {});
      expect(result).toBe('https://exemplo.com/página-especial?text=texto para encode');
    });
  });

  describe('case insensitive', () => {
    it('deve reconhecer placeholders em diferentes casos', () => {
      const url = 'https://wa.me/5511999999999?text=[[name]] [[Name]] [[NAME]]';
      const fields = { name: 'João' };
      const result = convertMobileUrl(url, fields);
      expect(result).toBe('https://wa.me/5511999999999?text=Jo%C3%A3o%20Jo%C3%A3o%20Jo%C3%A3o');
    });
  });

  describe('cenários complexos', () => {
    it('deve lidar com URL sem parâmetros de texto', () => {
      const url = 'https://wa.me/[[PHONE]]';
      const fields = { phone: '11999999999' };
      const result = convertMobileUrl(url, fields);
      expect(result).toBe('https://wa.me/5511999999999');
    });

    it('deve lidar com múltiplos parâmetros na URL', () => {
      const url = 'https://wa.me/[[PHONE]]?text=[[NAME]]&source=app';
      const fields = { name: 'Teste', phone: '11999999999' };
      const result = convertMobileUrl(url, fields);
      expect(result).toBe('https://wa.me/5511999999999?text=Teste%26source%3Dapp');
    });
  });
});