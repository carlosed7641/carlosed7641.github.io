# Portfolio · Carlos Castro Reales

Mi portfolio personal: Software Engineer especializado en frontend, enfocado en soluciones con IA (RAG y orquestación de agentes).

Es una sola página estática con hero, logros, sobre mí, proyectos, experiencia, stack y contacto.

## Stack

- **Next.js 16** (App Router), generado 100% estático
- **TypeScript**
- **Tailwind CSS v4**, con los colores, fuentes y animaciones definidos como tokens en `globals.css`
- **Hanken Grotesk** y **JetBrains Mono**, cargadas con `next/font`

## Desarrollo

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
npm run lint
```

## Estructura

```
src/
  app/
    page.tsx        Página principal con todas las secciones
    layout.tsx      Fuentes y metadatos (SEO y Open Graph)
    globals.css     Tokens de diseño, animaciones y utilidades de hover
    icon.svg        Favicon
    apple-icon.tsx  Ícono de inicio en iOS, generado en el build
  components/
    Nav.tsx         Barra de navegación que cambia de estilo al hacer scroll
    CodeWindow.tsx  Ventana de código con efecto de escritura del hero
    Reveal.tsx      Animación de aparición al hacer scroll
    ui.tsx          Botones, enlaces y títulos reutilizables
  data/
    content.ts      Todo el contenido del sitio
```

Para actualizar textos, proyectos o experiencia solo hay que editar `src/data/content.ts`.
