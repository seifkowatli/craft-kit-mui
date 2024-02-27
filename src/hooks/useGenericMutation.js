import Cookies from 'js-cookie';
import { useMutation } from 'react-query';
import { useNotifications } from '~/providers';

export const useGenericMutation = (
  resource,
  method = 'POST',
  withAuth = true,
  customHost = null,
  options = {},
  configs = {}
) => {
  const { notify } = useNotifications();
  const {craftKitState : {defaultHost , storageKeys}} = useCraftKitState();
  const host = isEmpty(customHost) ? defaultHost : customHost;

  const headers = new Headers({
    'Content-Type': 'application/json;charset=utf-8',
    authorization: withAuth ? `Bearer ${Cookies.get(storageKeys.token)}` : null,
  });
  
  let tempRes = null;

  return (urlParams = '', queryParams = '') =>
    useMutation(
      async data => {
        const response = await fetch(
          `${host}${resource}${urlParams}${queryParams}`,
          {
            method,
            headers,
            body: JSON.stringify(data),
            ...options,
          }
        );
        if (!response.ok) {
          tempRes = await response.json();
          throw new Error(response.status);
        }
        return await response.json();
      },
      {
        ...configs,
        onError: error => {
          notify('error', tempRes.message);
        },
      }
    );
};
