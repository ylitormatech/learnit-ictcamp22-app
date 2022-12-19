// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



<<<<<<< HEAD
const { UserAnswers, Selection, UserProfile, Questions } = initSchema(schema);

export {
  UserAnswers,
  Selection,
=======
const { UserProfile, Questions } = initSchema(schema);

export {
>>>>>>> e3d0c8f6f31c72d69653456acd98bf35b3d250b9
  UserProfile,
  Questions
};