const getHome = (req, res) => {
  const cities = [{
    name: 'Paris',
    slug: 'paris',
    source: '/img/paris.png'
  }, {
    name: 'Rome',
    slug: 'rome',
    source: '/img/rome.png'
  }, {
    name: 'Nice',
    slug: 'nice',
    source: '/img/nice.png'
  }, {
    name: 'New York',
    slug: 'new-york',
    source: '/img/new-york.png'
  }, {
    name: 'Londres',
    slug: 'london',
    source: '/img/london.png'
  }];

  res.json({
    success: true,
    cities
  });
};

module.exports = {
  getHome
};