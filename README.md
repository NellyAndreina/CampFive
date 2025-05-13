
# Campamento Cinco de Automatización

# Desafío de Automatización con BDD
Proyecto de automatización que combina pruebas funcionales y de performance utilizando BDD (Behavior Driven Development).

## Tecnologías Utilizadas
- Cypress - Cucumber - Lighthouse
- Playwright - Cucumber - Artillery
- Gherkin para escenarios de pruebas funcionales

## Requisitos Previos
- Cuenta de GitHub con correo de Apply Digital
- Node.js instalado
- Acceso al sitio IMDb para pruebas

## Instalación
```bash
git clone https://github.com/NellyAndreina/CampFive.git
cd CampFive
npm install
```

## Estructura del Proyecto
```
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   └── support/
├── playwright/
│   ├── tests/
│   └── config/
├── features/
│   └── *.feature
└── README.md

```

## Escenarios de Prueba
### Pruebas Funcionales:
- Búsqueda exitosa de una película
- Búsqueda de una película inexistente
- Autocompletado en la barra de búsqueda

### Pruebas de Performance:
- Evaluación con Lighthouse (performance > 80, accesibilidad > 90)
- Pruebas de carga con Artillery (5 usuarios/segundo durante 60 segundos)

## Ejecución de Pruebas
```bash
# Pruebas funcionales
npm run test:functional

# Pruebas de performance
npm run test:performance
```

## Convenciones
- Utilizar Title Case para nombres de archivos y carpetas
- Mantener un historial de commits progresivo
- Realizar PRs para revisión de código