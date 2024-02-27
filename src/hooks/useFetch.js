import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { useCraftKitState } from '../providers/craft-kit-provider';
import { isEmpty } from '~/utils';

export const useFetch = (
  resource,
  withAuth = true,
  customHost = null,
  configs = {}
) => {
  const {craftKitState : {defaultHost , storageKeys}} = useCraftKitState();
  const host = isEmpty(customHost) ? defaultHost : customHost;

  const headers = new Headers({
    'Content-Type': 'application/json;charset=utf-8',
    authorization: withAuth ? `Bearer ${Cookies.get(storageKeys?.token)}` : null,
  });

  return (urlParams = '', queryParams = '') =>
    useQuery(
      `${resource}${urlParams}${queryParams}`,
      async () => {
        let res = await fetch(`${host}${resource}${urlParams}${queryParams}`, {
          headers,
        });

        if (!res.ok) {
          tempRes = await res.json();
          throw new Error(res.status);
        }
        return res.json();
      },
      { ...configs }
    );
};
