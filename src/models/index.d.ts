import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUntitledModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UntitledModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionName?: string | null;
  readonly questionDescription?: string | null;
  readonly min?: number | null;
  readonly max?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUntitledModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UntitledModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionName?: string | null;
  readonly questionDescription?: string | null;
  readonly min?: number | null;
  readonly max?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UntitledModel = LazyLoading extends LazyLoadingDisabled ? EagerUntitledModel : LazyUntitledModel

export declare const UntitledModel: (new (init: ModelInit<UntitledModel>) => UntitledModel) & {
  copyOf(source: UntitledModel, mutator: (draft: MutableModel<UntitledModel>) => MutableModel<UntitledModel> | void): UntitledModel;
}