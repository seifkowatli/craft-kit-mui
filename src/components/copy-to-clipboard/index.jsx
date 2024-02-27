import { useState } from 'react';
import { ContentCopy, Check } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

const CopyToClipboard = ({ value }) => {
  const { formatMessage: t } = useIntl();
  const [isCopied, setIsCopied] = useState(false);

  const getText = copied =>
    copied ? t({ id: 'copiedToClipboard' }) : t({ id: 'copToClipboard' });

  const copy = async value => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Tooltip title={getText(isCopied)}>
      <IconButton color="primary" onClick={() => copy(value)}>
        {isCopied ? <Check /> : <ContentCopy />}
      </IconButton>
    </Tooltip>
  );
};

CopyToClipboard.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CopyToClipboard;
