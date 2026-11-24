# NODUM

Sitio corporativo de NODUM, construido con Next.js App Router, TypeScript y Tailwind CSS.

## Desarrollo local

Requiere Node.js y npm.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Comandos

```bash
npm run dev       # Servidor local
npm run lint      # Reglas de ESLint
npm run typecheck # Validación de TypeScript
npm run build     # Compilación de producción
npm run start     # Servidor de producción
```

## Rutas

- `/` — inicio
- `/wms` — gestión de almacén para manufactura
- `/soluciones` — índice de soluciones
- `/desarrollo-software` — software a la medida
- `/desarrollo-web` — plataformas web
- `/aplicaciones` — aplicaciones móviles y de escritorio
- `/nosotros` — enfoque de trabajo
- `/contacto` — formulario de contacto
- `/diagnostico` — formulario de diagnóstico

Cada página define sus propios metadatos. Los datos de navegación y el contenido de las páginas de servicio se mantienen en `src/content/`.

## Formularios

El endpoint `POST /api/leads` valida las solicitudes y las reenvía a la URL configurada en `LEADS_WEBHOOK_URL`. Copia `.env.example` a `.env.local` y asigna una URL HTTPS del servicio que recibirá los leads. En producción, el formulario devuelve un error explícito hasta que esa integración esté configurada.

El servicio receptor debe aceptar un `POST` con `Content-Type: application/json` y responder con un estado HTTP exitoso. Recibirá un objeto `type` (`contact` o `diagnostic`) y los campos correspondientes al formulario.

## Estructura

- `src/app/` — rutas, layout, metadatos y endpoint de formularios
- `src/components/` — navegación, elementos de interfaz y secciones reutilizables de la homepage
- `src/content/` — navegación, contenido de servicios y datos de la homepage
- `src/app/globals.css` — reset y tokens visuales compartidos
- `src/styles/homepage.css` — identidad visual y estilos responsive de la homepage

La interfaz del WMS en la homepage es una demostración visual con datos de ejemplo; no se conecta a un backend ni representa inventario real.
