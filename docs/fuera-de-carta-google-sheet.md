# Fuera de Carta con Google Sheets

Esta es la estructura recomendada para mantener el `fuera de carta` sin tocar el código cada vez que cambie un plato.

## Columnas recomendadas

Usa esta fila 1 como encabezado:

```text
Disponible | Orden | Categoria ES | Categoria EN | Categoria FR | Categoria IT | Categoria DE | Plato ES | Plato EN | Plato FR | Plato IT | Plato DE
```

## Qué significa cada columna

- `Disponible`: `TRUE` o `FALSE`. Solo se muestran las filas en `TRUE`.
- `Orden`: número para controlar el orden de aparición.
- `Categoria ES/EN/FR/IT/DE`: nombre de la categoría en cada idioma.
- `Plato ES/EN/FR/IT/DE`: nombre del plato en cada idioma.

## Ejemplo

```text
TRUE | 10 | Entrantes | Starters | Entrées | Antipasti | Vorspeisen | Atún marinado | Marinated tuna | Thon mariné | Tonno marinato | Marinierter Thunfisch
TRUE | 20 | Entrantes | Starters | Entrées | Antipasti | Vorspeisen | Boquerones fritos | Fried anchovies | Anchois frits | Acciughe fritte | Frittierte Sardellen
TRUE | 30 | Pescados | Fish | Poissons | Pesce | Fisch | Lubina | Sea bass | Bar | Spigola | Wolfsbarsch
```

## Cómo lo usará el encargado

- Para ocultar un plato: cambiar `Disponible` a `FALSE`.
- Para mostrarlo: cambiar `Disponible` a `TRUE`.
- Para cambiar el orden: modificar `Orden`.
- Para mantener idiomas correctos: editar las columnas del plato y de la categoría.

## Compatibilidad con el front actual

El código actual ya soporta:

- `Plato`, `Disponible`, `Categoria` en formato simple.
- columnas con espacios o guiones bajos como `Plato EN`, `Plato_EN`, `Categoria FR`, etc.
- idiomas `ES`, `EN`, `FR`, `IT` y `DE`.

## Recomendación real

Si el restaurante va a tocar solo disponibilidad, el formato simple puede servir.
Si quieres que el sitio salga bien en todos los idiomas sin volver a tocar `script.js`, usa la estructura multidioma de arriba.

## Apps Script

En este proyecto dejé un ejemplo listo en:

`apps-script/fuera-de-carta-api.gs`

Ese script transforma la hoja en una API JSON apta para la web.
