import mocha from 'mocha';
import chai from 'chai';
import fetch from 'node-fetch';
import assert from 'assert';
import app from '../app.js';


    describe('.getApi', () => {
        it('gets info from api', () =>{
            const actual = app.getApi();
            assert.notEqual(actual, null);   
    })
})

 