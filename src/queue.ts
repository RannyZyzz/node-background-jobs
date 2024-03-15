import dotenv from 'dotenv'
dotenv.config()

import Queue from './app/lib/Queue'

Queue.process();
