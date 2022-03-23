const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories ****
  // be sure to include its associated Products ****
  try { const dbUserData = await Category.findAll({
      attributes:['id', 'category_name'],
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock']
        }
      ],
    });
    res.json(dbUserData);
  }
  catch(err) {
        console.log(err);
        res.status(500).json(err);
  };
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value  ****
  // be sure to include its associated Products ****
  try {
    const { id } = req.params;
    const dbUserData = await Category.findOne({
    attributes:['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    ],
    where: {
      id: id
    }
  });
  res.json(dbUserData);
}
catch(err) {
      console.log(err);
      res.status(500).json(err);
};
});

router.post('/', async (req, res) => {
  // create a new category ****
  try {
    const dbUserData = await Category.create(req.body);
    res.json(dbUserData);
  }
  catch(err) {
      console.log(err);
      res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value ****
  try {
    const { id } = req.params;
    const dbUserData = await Category.update(req.body,{ 
      where: {
        id: id
      },
    });
  res.json(dbUserData);
  }
  catch(err) {
        console.log(err);
        res.status(500).json(err);
  };
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value ****
  try {
    const { id } = req.params;
    const dbUserData = await Category.destroy({ 
      where: {
        id: id
      }
    });
  res.json(dbUserData);
  }
  catch(err) {
        console.log(err);
        res.status(500).json(err);
  };
});

module.exports = router;
