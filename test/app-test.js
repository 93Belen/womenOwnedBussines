import mocha from 'mocha';
import chai from 'chai';
import fetch from 'node-fetch';
import assert from 'assert';
import app from '../app.js';
import { application, json } from "express";

    describe('.getApi', () => {
        it('gets info from api', () =>{
            const json = app.getApi();
            const actual = json.length

            assert.notEqual(actual, 0);   
        })
        it('return json object', () => {
            const expected = 'object';
            const json = app.getApi();
            const obj = json;
            const actual = typeof obj;

            assert.equal(actual, expected);
        })
    
    })

 