import { isEmpty } from './general.utils';

export const getPermissionsArray = roles => {
  let permissionSet = new Set();

  for (const role of roles) {
    role.permissions.forEach(rolesPermission =>
      permissionSet.add(rolesPermission)
    );
  }
  return Array.from(permissionSet);
};

export const isHavePermission = (permissionsArray, requiredPermissions) => {
  const userRequiredPermissions = isEmpty(requiredPermissions)
    ? []
    : requiredPermissions;

  return userRequiredPermissions.every(requiredPermission =>
    permissionsArray.includes(requiredPermission)
  );
};

export const isHaveOneOfPermissions = (
  permissionsArray,
  requiredPermissions
) => {
  const userRequiredPermissions = isEmpty(requiredPermissions)
  ? []
  : requiredPermissions;

  if (isEmpty(userRequiredPermissions)) return true;
  
  for (const requiredPermission of userRequiredPermissions) {
    if (permissionsArray.includes(requiredPermission)) return true;
  }
};

export const getUserPrivateRoutes = (userPermissions, privateRoutes) =>
  privateRoutes.filter(
    route =>
      route.permission === null || userPermissions.includes(route.permission)
  );
