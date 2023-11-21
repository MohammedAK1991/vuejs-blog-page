
const express = require('express');
const app = express();

app.use(express.json());

app.get('/metadata/:page', (req, res) => {
  const { page } = req.params;
  const metadata = {
    'home': {
      metaTitle: 'Home Page',
      metaDescription: 'Welcome to our home page.',
    },
    'about': {
      metaTitle: 'About Us',
      metaDescription: 'Learn more about us.',
    },
    'blog': {
      metaTitle: 'Blog Articles',
      metaDescription: 'Read our latest blog articles.',
    }
  };

  res.json(metadata[page] || {});
});

module.exports = {
  path: '/api',
  handler: app
};
