import { useCraftKitState } from '~/providers';
import { isEmpty } from '~/utils';
import {
  getPermissionsArray,
  isHaveOneOfPermissions,
  isHavePermission,
} from '~/utils/permissions.utils';

export const usePermissions = () => {
  const {craftKitState : {roles}} = useCraftKitState();


  const userPermissionsArray = isEmpty(roles)
    ? []
    : getPermissionsArray(roles);

  const userHavePermission = requiredPermission =>
    isHavePermission(userPermissionsArray, requiredPermission);

  const userHaveOneOfPermissions = requiredPermissions =>
    isHaveOneOfPermissions(userPermissionsArray, requiredPermissions);

  return { userPermissionsArray, userHavePermission , userHaveOneOfPermissions };
};
