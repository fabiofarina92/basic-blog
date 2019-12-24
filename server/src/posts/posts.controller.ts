import { Request, Response } from 'express';
import logger from '../util/logger';
import Posts from './post.model';

export const getPost = (request: Request, response: Response) => {
    if (request.params.id) {
        Posts.find({ _id: request.params.id}).then((post) => {
            if (post) {
                logger.info('Found post item: %s', JSON.stringify(post));
                response.status(200).json(post);
            } else {
                logger.info('Post: %d not found', request.params.id);
                response.status(404).json({
                    message: 'Requested post not found'
                });
            }
        });
    } else {
        logger.warn('User attempted to search for nothing');
        response.status(401).json({
            message: 'No id supplied'
        });
    }
};

export const getAllPosts = (request: Request, response: Response) => {
    Posts.find({}).then((posts) => {
        if (posts) {
            logger.info('Found posts: %s', JSON.stringify(posts));
            response.status(200).json(posts);
        } else {
            logger.info('No posts were found');
            response.status(200).json({
                message: 'No posts found'
            });
        }
    });
};

export const newPost = (request: Request, response: Response) => {
    logger.info('Request made to newPost endpoint');
    logger.info(request.body);
    if (request.body.title && request.body.content) {
        Posts.create({ _id: request.body.id, title: request.body.title, content: request.body.content}).then((post) => {
            if (post) {
                logger.info('Post successfully created: %s', JSON.stringify(post));
                response.status(200).json(post);
            } else {
                logger.info('Something went wrong');
                response.status(500).json({
                    message: 'Something went wrong'
                });
            }
        });
    } else {
        response.status(404).json('Please provide the body and content');
    }
};
