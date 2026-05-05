const SHEET_NAME = 'Fuera de Carta';

function doGet() {
  const payload = getSpecialsPayload_();

  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSpecialsPayload_() {
  const sheet = getSpecialsSheet_();
  const rows = sheet.getDataRange().getDisplayValues();

  if (rows.length < 2) {
    return [];
  }

  const headers = rows[0].map(normalizeHeader_);

  return rows
    .slice(1)
    .map((row, index) => mapSpecialRow_(headers, row, index))
    .filter(isSpecialRowVisible_)
    .filter(row => row.plato || row.plato_es);
}

function getSpecialsSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getSheets()[0];
}

function mapSpecialRow_(headers, row, index) {
  const raw = {};

  headers.forEach((header, columnIndex) => {
    raw[header] = String(row[columnIndex] || '').trim();
  });

  const categoryEs = firstValue_(raw, ['categoriaes', 'categoria', 'categoryes', 'category']);
  const dishEs = firstValue_(raw, ['platoes', 'plato', 'dishes', 'dish', 'itemes', 'item']);

  return {
    disponible: toBoolean_(firstValue_(raw, ['disponible', 'available', 'activo', 'visible'])),
    orden: toNumber_(firstValue_(raw, ['orden', 'order', 'posicion', 'position']), index + 1),
    categoria: categoryEs,
    categoria_en: firstValue_(raw, ['categoriaen', 'categoryen']),
    categoria_fr: firstValue_(raw, ['categoriafr', 'categoryfr']),
    categoria_it: firstValue_(raw, ['categoriait', 'categoryit']),
    categoria_de: firstValue_(raw, ['categoriade', 'categoryde']),
    plato: dishEs,
    plato_en: firstValue_(raw, ['platoen', 'dishen', 'itemen']),
    plato_fr: firstValue_(raw, ['platofr', 'dishfr', 'itemfr']),
    plato_it: firstValue_(raw, ['platoit', 'dishit', 'itemit']),
    plato_de: firstValue_(raw, ['platode', 'dishde', 'itemde']),
  };
}

function isSpecialRowVisible_(row) {
  return row.disponible;
}

function normalizeHeader_(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '');
}

function firstValue_(raw, keys) {
  for (let i = 0; i < keys.length; i += 1) {
    const value = raw[keys[i]];
    if (value !== undefined && value !== null && value !== '') {
      return value;
    }
  }

  return '';
}

function toBoolean_(value) {
  const normalized = String(value || '').trim().toLowerCase();
  return ['true', '1', 'si', 'sí', 'yes', 'y', 'on'].includes(normalized);
}

function toNumber_(value, fallback) {
  const numericValue = Number(String(value || '').replace(',', '.'));
  return Number.isFinite(numericValue) ? numericValue : fallback;
}
