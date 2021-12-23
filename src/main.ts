#!/usr/bin/env node

import 'reflect-metadata'
import { Handler } from "./handler"

(function main() {
    const handler = new Handler()
    handler.init()
    handler.run()
})()