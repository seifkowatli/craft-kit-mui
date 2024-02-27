import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MenuList = ({ defaultLabel, defaultIcon = null, data, handleChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <Button
        aria-controls={open ? defaultLabel : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="outlined"
        color="secondary"
        sx={{ display: 'flex', gap: 1 / 2, fontSize: 12 }}
        size="small"
      >
        {defaultIcon}
        {defaultLabel}
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id={defaultLabel}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            top: '16px !important',
            backgroundColor: 'primary.main',
          },
        }}
        MenuListProps={{ sx: { backgroundColor: 'primary.main' } }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {data.map((Item, index) => (
          <MenuItem
            key={`menu-list-item${index}`}
            onClick={() => {
              handleClose();
              handleChange(Item);
            }}
          >
            {Item.icon && <Item.icon />}
            <FormattedMessage id={Item.label} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuList;

MenuList.propTypes = {
  defaultLabel: PropTypes.string.isRequired,
  defaultIcon: PropTypes.element,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.element,
    })
  ),
  handleChange: PropTypes.func.isRequired,
};
