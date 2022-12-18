import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserAnswers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserAnswers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly selectionID?: string | null;
  readonly questionID?: string | null;
  readonly value?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserAnswers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserAnswers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly selectionID?: string | null;
  readonly questionID?: string | null;
  readonly value?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserAnswers = LazyLoading extends LazyLoadingDisabled ? EagerUserAnswers : LazyUserAnswers

export declare const UserAnswers: (new (init: ModelInit<UserAnswers>) => UserAnswers) & {
  copyOf(source: UserAnswers, mutator: (draft: MutableModel<UserAnswers>) => MutableModel<UserAnswers> | void): UserAnswers;
}

type EagerSelection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Selection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionID?: string | null;
  readonly description?: string | null;
  readonly value?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySelection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Selection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionID?: string | null;
  readonly description?: string | null;
  readonly value?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Selection = LazyLoading extends LazyLoadingDisabled ? EagerSelection : LazySelection

export declare const Selection: (new (init: ModelInit<Selection>) => Selection) & {
  copyOf(source: Selection, mutator: (draft: MutableModel<Selection>) => MutableModel<Selection> | void): Selection;
}

type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

type EagerQuestions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Questions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionName?: string | null;
  readonly questionDescription?: string | null;
  readonly min?: number | null;
  readonly max: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Questions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionName?: string | null;
  readonly questionDescription?: string | null;
  readonly min?: number | null;
  readonly max: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Questions = LazyLoading extends LazyLoadingDisabled ? EagerQuestions : LazyQuestions

export declare const Questions: (new (init: ModelInit<Questions>) => Questions) & {
  copyOf(source: Questions, mutator: (draft: MutableModel<Questions>) => MutableModel<Questions> | void): Questions;
}