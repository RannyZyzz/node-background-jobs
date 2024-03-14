import dotenv from 'dotenv'
dotenv.config()

import Queue from './app/lib/Queue'
import RegistrationMail from './app/jobs/RegistrationMail'

Queue.process(RegistrationMail.handle);
