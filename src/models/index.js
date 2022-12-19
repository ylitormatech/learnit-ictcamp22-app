// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



<<<<<<< HEAD
const { UserProfile, Questions } = initSchema(schema);

export {
=======
const { UserAnswers, Selection, UserProfile, Questions } = initSchema(schema);

export {
  UserAnswers,
  Selection,
>>>>>>> 0582d9e3c62db2a4e4b897ba962cc7bac081a23c
  UserProfile,
  Questions
};