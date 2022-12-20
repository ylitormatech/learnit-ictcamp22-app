// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserAnswers, UserProfile, Questions } = initSchema(schema);

export {
  UserAnswers,
  UserProfile,
  Questions
};