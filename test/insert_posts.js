const assert = require('assert');
const Post = require('../models/postModel');
const mongoose = require('mongoose');

describe('Add Post tests', () => {
    it('Save Post', done => {
        const post = new Post({ title: 'NodeJs', body:'NodeJs Course' });
        post.save().then(() => {
            assert(!post.isNew);
            done();
        });
    });
    it('Save many posts', done => {
        const post1 = { title: 'Angular', body:'Angular Course' };
        const post2 = { title: 'ReactJs', body:'ReactJs Course' };
        const post3 = { title: 'VueJs', body:'VueJs Course' };

        Post.insertMany().then(() => {
            assert(true);
            done();
        });
    })
});