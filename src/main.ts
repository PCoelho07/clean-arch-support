#!/usr/bin/env node

import 'reflect-metadata'
import { Handler } from "./handler"

(function main() {
    try {
        const handler = new Handler()
        handler.init()
        handler.run()
    } catch (error) {
        console.log(error)
    }
})()