const express = require('express');
const router = express.Router();
const { data } = require('../data/portfolioData.json');
const { projects } = data;

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const {
    project_name,
    description,
    technologies,
    live_link,
    github_link,
    image_urls
  } =  projects[id];
  const { 
    image1, 
    image2,
    image3
  } = image_urls;
  
  if (!projects[id]) {
    const err = new Error('You are in the wrong neighborhood pal');
    res.locals.error = err;
    err.status = 404;
    res.render('error')
  } else {
    res.render('project', {
    project_name,
    description,
    technologies,
    live_link,
    github_link,
    image1,
    image2,
    image3
    });
  }
});

module.exports = router;