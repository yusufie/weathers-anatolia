import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as any;

export default async function connectToDatabase() {

  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db('weatherdata');
  const collection = db.collection('weathers');
  const data = await collection.find({}).toArray();
  return data;
  
}



