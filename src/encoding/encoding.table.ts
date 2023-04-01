export interface EncodingEntry {
  decoded: string;
  encoded: string;
}

export const ENCODING_TABLE = [
  { decoded: '+', encoded: '%2B' },
  { decoded: '&', encoded: '%26' },
  { decoded: '¡', encoded: '%A1' },
  { decoded: '¢', encoded: '%A2' },
  { decoded: '£', encoded: '%A3' },
  { decoded: '¤', encoded: '%A4' },
  { decoded: '¥', encoded: '%A5' },
  { decoded: '¦', encoded: '%A6' },
  { decoded: '§', encoded: '%A7' },
  { decoded: '¨', encoded: '%A8' },
  { decoded: '©', encoded: '%A9' },
  { decoded: 'ª', encoded: '%AA' },
  { decoded: '«', encoded: '%AB' },
  { decoded: '¬', encoded: '%AC' },
  { decoded: '®', encoded: '%AE' },
  { decoded: '¯', encoded: '%AF' },
  { decoded: '°', encoded: '%B0' },
  { decoded: '±', encoded: '%B1' },
  { decoded: '²', encoded: '%B2' },
  { decoded: '³', encoded: '%B3' },
  { decoded: '´', encoded: '%B4' },
  { decoded: 'µ', encoded: '%B5' },
  { decoded: '¶', encoded: '%B6' },
  { decoded: '·', encoded: '%B7' },
  { decoded: '¸', encoded: '%B8' },
  { decoded: '¹', encoded: '%B9' },
  { decoded: 'º', encoded: '%BA' },
  { decoded: '»', encoded: '%BB' },
  { decoded: '¼', encoded: '%BC' },
  { decoded: '½', encoded: '%BD' },
  { decoded: '¾', encoded: '%BE' },
  { decoded: '¿', encoded: '%BF' },
  { decoded: 'À', encoded: '%C0' },
  { decoded: 'Á', encoded: '%C1' },
  { decoded: 'Â', encoded: '%C2' },
  { decoded: 'Ã', encoded: '%C3' },
  { decoded: 'Ä', encoded: '%C4' },
  { decoded: 'Å', encoded: '%C5' },
  { decoded: 'Æ', encoded: '%C6' },
  { decoded: 'Ç', encoded: '%C7' },
  { decoded: 'È', encoded: '%C8' },
  { decoded: 'É', encoded: '%C9' },
  { decoded: 'Ê', encoded: '%CA' },
  { decoded: 'Ë', encoded: '%CB' },
  { decoded: 'Ì', encoded: '%CC' },
  { decoded: 'Í', encoded: '%CD' },
  { decoded: 'Î', encoded: '%CE' },
  { decoded: 'Ï', encoded: '%CF' },
  { decoded: 'Ð', encoded: '%D0' },
  { decoded: 'Ñ', encoded: '%D1' },
  { decoded: 'Ò', encoded: '%D2' },
  { decoded: 'Ó', encoded: '%D3' },
  { decoded: 'Ô', encoded: '%D4' },
  { decoded: 'Õ', encoded: '%D5' },
  { decoded: 'Ö', encoded: '%D6' },
  { decoded: '×', encoded: '%D7' },
  { decoded: 'Ø', encoded: '%D8' },
  { decoded: 'Ù', encoded: '%D9' },
  { decoded: 'Ú', encoded: '%DA' },
  { decoded: 'Û', encoded: '%DB' },
  { decoded: 'Ü', encoded: '%DC' },
  { decoded: 'Ý', encoded: '%DD' },
  { decoded: 'Þ', encoded: '%DE' },
  { decoded: 'ß', encoded: '%DF' },
  { decoded: 'à', encoded: '%E0' },
  { decoded: 'á', encoded: '%E1' },
  { decoded: 'â', encoded: '%E2' },
  { decoded: 'ã', encoded: '%E3' },
  { decoded: 'ä', encoded: '%E4' },
  { decoded: 'å', encoded: '%E5' },
  { decoded: 'æ', encoded: '%E6' },
  { decoded: 'ç', encoded: '%E7' },
  { decoded: 'è', encoded: '%E8' },
  { decoded: 'é', encoded: '%E9' },
  { decoded: 'ê', encoded: '%EA' },
  { decoded: 'ë', encoded: '%EB' },
  { decoded: 'ì', encoded: '%EC' },
  { decoded: 'í', encoded: '%ED' },
  { decoded: 'î', encoded: '%EE' },
  { decoded: 'ï', encoded: '%EF' },
  { decoded: 'ð', encoded: '%F0' },
  { decoded: 'ñ', encoded: '%F1' },
  { decoded: 'ò', encoded: '%F2' },
  { decoded: 'ó', encoded: '%F3' },
  { decoded: 'ô', encoded: '%F4' },
  { decoded: 'õ', encoded: '%F5' },
  { decoded: 'ö', encoded: '%F6' },
  { decoded: '÷', encoded: '%F7' },
  { decoded: 'ø', encoded: '%F8' },
  { decoded: 'ù', encoded: '%F9' },
  { decoded: 'ú', encoded: '%FA' },
  { decoded: 'û', encoded: '%FB' },
  { decoded: 'ü', encoded: '%FC' },
  { decoded: 'ý', encoded: '%FD' },
  { decoded: 'þ', encoded: '%FE' },
  { decoded: 'ÿ', encoded: '%FF' },
];
