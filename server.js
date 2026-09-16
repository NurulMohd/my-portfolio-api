const express = require('express');
const portfolio = require('./data/portfolio');

const app = express();
const port = Number(process.env.PORT) || 3000;

app.disable('x-powered-by');
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

app.get('/', (req, res) => {
  res.json({
    name: 'my-portfolio-api',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      portfolio: '/api/portfolio',
      profile: '/api/profile',
      skills: '/api/skills',
      projects: '/api/projects',
      contact: '/api/contact',
    },
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'my-portfolio-api',
  });
});

app.get('/api/portfolio', (req, res) => {
  res.json(portfolio);
});

app.get('/api/profile', (req, res) => {
  res.json(portfolio.profile);
});

app.get('/api/skills', (req, res) => {
  res.json(portfolio.skills);
});

app.get('/api/projects', (req, res) => {
  res.json(portfolio.projects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = portfolio.projects.find(({ id }) => id === req.params.id);

  if (!project) {
    return res.status(404).json({
      error: 'Project not found',
    });
  }

  res.json(project);
});

app.get('/api/contact', (req, res) => {
  res.json(portfolio.contact);
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
  });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({
    error: 'Internal server error',
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`my-portfolio-api listening on port ${port}`);
  });
}

module.exports = app;
