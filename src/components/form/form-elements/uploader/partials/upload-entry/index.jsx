import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
// import { useUpload } from '~/hooks';

// const storageUrl = import.meta.env.VITE_API_HOST;
const storageUrl = 'test';

const UploadEntry = ({ name, _id, path, type , setFiles }) => {
  // const { removeUpload } = useUpload();

  // const { mutate: remove } = removeUpload(`/${_id}`);

  // const removeAction = () => {
  //   setFiles(files => files.filter(file => file._id !== _id));
  //   remove({}, { onSuccess: () => console.log('removed') });
  // };

  return (
    <ImageListItem sx={{ maxWidth: 150 }} key={_id}>
      <img src={`${storageUrl}/${path}`} alt={name} loading="lazy" />
      <ImageListItemBar
        maxWidth={150}
        subtitle={name}
        actionIcon={
          <IconButton
            // onClick={removeAction}
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${name}`}
          >
            <DeleteIcon  />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default UploadEntry;
