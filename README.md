# Qatar Tourism Dashboard

Un dashboard simple para visualizar datos de turismo de Qatar.

## Estructura del Proyecto

- `public/assets`: Contiene los activos estáticos como el logo de Qatar
- `src/components`: Componentes de React simplificados
- `src/index.css`: Estilos basados en Tailwind CSS

## Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

## Tecnologías Utilizadas

- React
- Tailwind CSS

## Features

- Interactive data visualizations with recharts
- Detailed analysis of travel motivators and barriers
- Responsive design for all device sizes
- Segmented analysis by demographics and markets

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dani-rios-data/Qatar_tourism.git
cd Qatar_tourism
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
  ├── components/       # React components
  │   ├── BehaviorsSection/
  │   ├── PerceptionsSection/
  │   ├── MotivationsSection/
  │   ├── CompetitiveLandscapeSection/
  │   └── ExecutiveSummary/
  ├── App.js            # Main App component
  ├── index.js          # Entry point
  └── ...
```

## Deployment to Vercel

This project is configured for easy deployment to Vercel.

### Manual Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the project:
```bash
vercel
```

### Automatic Deployment via GitHub

1. Push your code to GitHub:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. Connect your GitHub repository to Vercel:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Configure the project (all defaults should work as the vercel.json is included)
   - Click "Deploy"

3. Your project will be automatically deployed on every push to the main branch.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Data visualization powered by [Recharts](https://recharts.org/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/) 