import { application, json } from "express";
import fetch from "node-fetch";

export default {
    async getApi(){
        const response = await fetch('/yelpapi');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    }
}

