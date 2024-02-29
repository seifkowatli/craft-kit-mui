import { List } from '@mui/material';
import { usePermissions } from '~/hooks/usePermissions';
import { isEmpty } from '~/utils';
import { DrawerItem, NestedDrawerItem } from './partials';

export const drawerRenderer = (listItems, level = 0) => {
  const {  useHaveOneOfPermissions  } = usePermissions();
  
  return (
    <List>
      {listItems.map(itemObj =>
        !useHaveOneOfPermissions(itemObj.permissions) ? null : isEmpty(
            itemObj.subItems
          ) ? (
          <DrawerItem
            key={`navigation-${itemObj.label}`}
            level={level}
            {...itemObj}
          />
        ) : (
          <NestedDrawerItem key={`navigation-${itemObj.label}`} {...itemObj}>
            {drawerRenderer(itemObj.subItems, level + 1)}
          </NestedDrawerItem>
        )
      )}
    </List>
  );
};
