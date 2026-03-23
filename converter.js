// ── WEIGHT ──────────────────────────────────────────────
// Base unit: kg
const weightFields = ['kg', 'g', 'lb', 'oz'];
const toKg = { kg: 1, g: 0.001, lb: 0.453592, oz: 0.0283495 };

weightFields.forEach(id => {
  document.getElementById(id).addEventListener('input', e => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) { clearFields(weightFields, id); return; }
    const kg = val * toKg[id];
    weightFields.forEach(f => {
      if (f !== id) document.getElementById(f).value = round(kg / toKg[f]);
    });
  });
});

// ── LENGTH ───────────────────────────────────────────────
// Base unit: m
const lengthFields = ['m', 'cm', 'km', 'ft', 'inch', 'mi'];
const toM = { m: 1, cm: 0.01, km: 1000, ft: 0.3048, inch: 0.0254, mi: 1609.344 };

lengthFields.forEach(id => {
  document.getElementById(id).addEventListener('input', e => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) { clearFields(lengthFields, id); return; }
    const m = val * toM[id];
    lengthFields.forEach(f => {
      if (f !== id) document.getElementById(f).value = round(m / toM[f]);
    });
  });
});

// ── TEMPERATURE ──────────────────────────────────────────
const tempFields = ['c', 'f', 'k'];

document.getElementById('c').addEventListener('input', e => {
  const c = parseFloat(e.target.value);
  if (isNaN(c)) { clearFields(tempFields, 'c'); return; }
  document.getElementById('f').value = round(c * 9/5 + 32);
  document.getElementById('k').value = round(c + 273.15);
});

document.getElementById('f').addEventListener('input', e => {
  const f = parseFloat(e.target.value);
  if (isNaN(f)) { clearFields(tempFields, 'f'); return; }
  const c = (f - 32) * 5/9;
  document.getElementById('c').value = round(c);
  document.getElementById('k').value = round(c + 273.15);
});

document.getElementById('k').addEventListener('input', e => {
  const k = parseFloat(e.target.value);
  if (isNaN(k)) { clearFields(tempFields, 'k'); return; }
  const c = k - 273.15;
  document.getElementById('c').value = round(c);
  document.getElementById('f').value = round(c * 9/5 + 32);
});

// ── HELPERS ──────────────────────────────────────────────
function round(val) {
  return parseFloat(val.toPrecision(8));
}

function clearFields(fields, except) {
  fields.forEach(f => { if (f !== except) document.getElementById(f).value = ''; });
}
