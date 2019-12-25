import { Request, Response } from 'express';
import logger from '../util/logger';
import PostsCounter from './post-counter.model';
import Posts from './post.model';

export const getPost = (request: Request, response: Response) => {
    if (request.params.id) {
        Posts.findOne({_id: request.params.id}).then((post) => {
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
            logger.info('Found postSchema: %s', JSON.stringify(posts));
            response.status(200).json(posts);
        } else {
            logger.info('No postSchema were found');
            response.status(200).json({
                message: 'No postSchema found'
            });
        }
    });
};

export const newPost = (request: Request, response: Response) => {
    logger.info('Request made to newPost endpoint');
    logger.info(request.body);
    if (request.body.title && request.body.content) {
        PostsCounter.findOne({ _id: 1 }).then((counter: any) => {
            if (counter) {
                const newId = counter.seq + 1;
                logger.info('New id: %s', newId);
                Posts.create({
                    _id: newId,
                    content: request.body.content,
                    title: request.body.title
                }).then((post) => {
                    if (post) {
                        logger.info('Post successfully created: %s', JSON.stringify(post));
                        PostsCounter.findOneAndUpdate({ _id: 1}, {$set: { seq: newId} }).then((counterUpdate) => {
                            logger.info('Counter was also updated: %s', JSON.stringify(counterUpdate));
                        });
                        response.status(200).json({
                            id: newId,
                            message: 'Post successfully created'
                        });
                    } else {
                        logger.info('Something went wrong');
                        response.status(500).json({
                            message: 'Something went wrong'
                        });
                    }
                });
            }
        });
    } else {
        response.status(404).json('Please provide the body and content');
    }
};
