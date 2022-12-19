// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserProfile, Questions } = initSchema(schema);

export {
  UserProfile,
  Questions
};