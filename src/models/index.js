// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserAnswers, Selection, UserProfile, Questions } = initSchema(schema);

export {
  UserAnswers,
  Selection,
  UserProfile,
  Questions
};