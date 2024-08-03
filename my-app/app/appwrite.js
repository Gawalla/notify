import dotenv from 'dotenv'
import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6694db3e003cd7dbf295'); // Replace with your project ID

export const account = new Account(client)
export { ID } from 'appwrite';
