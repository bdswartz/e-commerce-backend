const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags ****
  // be sure to include its associated Product data
  try { 
    const dbUserData = await Tag.findAll({
      attributes:['id', 'tag_name'],
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock'],
          through: ProductTag
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
  // find a single tag by its `id` ****
  // be sure to include its associated Product data
  try {
    const { id } = req.params;
    const dbUserData = await Tag.findOne({
      attributes:['id', 'tag_name'],
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock'],
          through: ProductTag
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
  // create a new tag ****
  try {
    const dbUserData = await Tag.create(req.body);
    res.json(dbUserData);
  }
  catch(err) {
      console.log(err);
      res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value ****
  try {
    const { id } = req.params;
    const dbUserData = await Tag.update(req.body, { 
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
  // delete on tag by its `id` value ****
  try {
    const { id } = req.params;
    const dbUserData = await Tag.destroy({ 
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
