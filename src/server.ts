import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import UserController from './app/controllers/UserController';

import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'
import { ExpressAdapter } from '@bull-board/express'

import Queue from './app/lib/Queue.ts'

const serverAdapter = new ExpressAdapter()
serverAdapter.setBasePath('/admin/queues')

const registrationMailQueue = Queue.queues.find(queue => queue.name === 'RegistrationMail')?.bull

const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
  queues: [new BullAdapter(registrationMailQueue)],
  serverAdapter: serverAdapter,
})

const app = express();
app.use(express.json());
app.post('/users', UserController.store)

app.use('/admin/queues', serverAdapter.getRouter())

app.listen(3333, () => {
  console.log('Server running on localhost:3333')
})
