export const convertMobileUrl = (
  mobileURL: string | undefined,
  fields: Record<string, string>
) => {
  if (!mobileURL) return '';
  if (!mobileURL.includes('[[')) return mobileURL;

  // Substitui placeholders
  let replaced = mobileURL.replace(/\[\[(.+?)\]\]/g, (_, key) => {
    switch (key.toUpperCase()) {
      case 'NAME':
        return fields.name || '';
      case 'SITE':
        return fields.page_title || '';
      case 'CPF':
        return fields.cpf || '';
      case 'WEBSITE':
        return fields.website || '';
      case 'PHONE':
        // mantém só dígitos e força prefixo 55
        return `55${(fields.phone || '').replace(/\D/g, '')}`;
      default:
        return '';
    }
  });

  // Aplica encode apenas no texto depois de ?text=
  replaced = replaced.replace(
    /(\?text=)(.*)/,
    (_, prefix, text) => `${prefix}${encodeURIComponent(text)}`
  );

  return replaced;
};