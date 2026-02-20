# 🦁 Peugeot Finance — Digital Showroom

Showroom digital con swipe de modelos Peugeot, financiación real y chatbot **Lourdes** integrado con N8N + OpenAI.

## Funcionalidades

- **Tinder-style swipe** de modelos (208 Manual, 208 Auto, 2008 Active, 2008 Allure, Partner, Expert)
- **Info sheet** con datos reales de financiación por modelo
- **Chat con Lourdes** — asesora virtual conectada a N8N + OpenAI + Google Sheets
- Diseño responsive (mobile + desktop)

## Stack

- HTML / CSS / JS vanilla (sin dependencias)
- N8N como backend del chatbot
- OpenAI (GPT) para las respuestas de Lourdes
- Google Sheets para registro de conversaciones

## Uso local

```bash
python -m http.server 3000
# Abrir: http://localhost:3000/stitch-export/showroom.html
```

> **Nota:** Las imágenes de los autos y la foto de Lourdes son locales y no están incluidas en el repo.
