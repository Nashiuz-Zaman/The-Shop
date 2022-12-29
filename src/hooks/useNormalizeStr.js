export default function useNormalizeStr() {
  const normalizeStr = (str) => {
    const regexUnderscore = /_/gi;
    const regexAnd = /and/gi;
    return str.replaceAll(regexUnderscore, " ").replaceAll(regexAnd, "&");
  };

  return { normalizeStr };
}
