import express = require('express');
import * as postsController from './posts.controller';

const router = express.Router();

router.get('/:id', postsController.getPost);
router.get('/', postsController.getAllPosts);
router.post('/new', postsController.newPost);

export default router;
