import { useFetch } from './useFetch';
import { useGenericMutation } from './useGenericMutation';

export const useCrud = (crudKey, fetchConfig = [], mutationConfig = []) => {
  const add = useGenericMutation(crudKey, 'POST', ...mutationConfig);
  const edit = useGenericMutation(crudKey, 'PATCH', ...mutationConfig);
  const remove = useGenericMutation(crudKey, 'DELETE', ...mutationConfig);
  const get = useFetch(crudKey, ...fetchConfig);

  return { add, edit, remove, get };
};
