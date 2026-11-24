# Hoja de vida móvil — Sara Jasmin Cruz Calderon

Aplicación de portafolio personal creada con Expo, React Native, TypeScript y Expo Router. Incluye perfil profesional, contacto directo, formación, experiencia e intereses.

## Ejecutar el proyecto

```bash
npm ci
npx expo start
```

Para abrir la versión web en el navegador:

```bash
npx expo start --web
```

## Personalizar los datos

- `src/app/index.tsx`: nombre, perfil, correo, teléfono y enlaces sociales.
- `src/app/estudios.tsx`: instituciones, títulos y años de estudio.
- `src/app/experiencia.tsx`: cargos, empresas, periodos y descripciones.
- `src/app/hobbies.tsx`: intereses y textos desplegables.

El proyecto original trae `Colegio ABC` y `Tienda de ejemplo` como datos genéricos; reemplázalos por los nombres reales antes de publicar o entregar la hoja de vida.

## Validación ejecutada

```bash
npx tsc --noEmit
npx expo export --platform web
```

Ambos comandos se ejecutaron correctamente para esta versión.
