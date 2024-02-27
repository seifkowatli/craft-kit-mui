import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { isEmpty } from '~/utils';
import { ActionButton, ConfirmationDialog, FormGenerator } from './Partials';
import { styles } from './styles';
import { useEffect } from 'react';
import { FormProvider, useFormSharedState, useNotifications } from '~/providers';

const FormBuilder = ({
  fields,
  defaultValues = {},
  formKey,
  submitAction,
  actionProps,
  cancelProps,
  loading,
  validationSchema,
  withConfirm = false,
  withReset = false,
  requestError,
  actionWrapperStyles = null,
  formWrapperStyles = null,
  children,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });
  const [confirmOpen, setConfirmOpen] = useState(false);
  const { formSharedState } = useFormSharedState();
  const { notification , notify} = useNotifications() 
  const submittedData = useRef({});


  useEffect(() => {
    if(!isEmpty(defaultValues)) {
      reset(defaultValues)
    }
  }, [reset , defaultValues])
    
  const submissionHandler = data => {

    console.log(notification)
    if(formSharedState.uploading) { 
      notify('error', 'Files are being uploaded, please wait a moment...');
      return;
    }

    if (withConfirm) {
      submittedData.current = data;
      setConfirmOpen(true);
      return;
    }

    submitAction(data)
  };

  const handleConfirmation = data => isConfirmed => {
    if (!isConfirmed) {
      setConfirmOpen(false);
      return;
    } else {
      setConfirmOpen(false);
      submitAction(data);
    }
  };

  return (
    <>
      <form
        autoComplete='off'
        noValidate
        style={styles.Form}
        name={formKey}
        onSubmit={handleSubmit(submissionHandler)}
      >
        <FormGenerator
          control={control}
          fields={fields}
          formKey={formKey}
          formWrapperStyles={formWrapperStyles}
          errors={errors}
        />
        {children}

        {!!requestError && (
          <Typography variant="body2" sx={{ pl: 0.5 }} color="error">
            {requestError}
          </Typography>
        )}

        {/* TODO double check this weird logic and encapsulate it    */}
        <Box sx={styles.ActionsWrapper(actionWrapperStyles)}>
          {!isEmpty(cancelProps) && <ActionButton {...cancelProps} />}
          {withReset && (
            <ActionButton label="reset" type="reset" onClick={reset} />
          )}

          <ActionButton
            label="submit"
            type="submit"
            loading={isSubmitting || loading}
            {...actionProps}
          />
        </Box>
      </form>
      
      {withConfirm && (
        <ConfirmationDialog
          open={confirmOpen}
          handleConfirmation={handleConfirmation(submittedData.current)}
        />
      )}
    </>
  );
};

FormBuilder.propTypes = {
  fields: PropTypes.array.isRequired,
  validationSchema: PropTypes.object.isRequired,
  formKey: PropTypes.string.isRequired,
  submitAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  defaultValues: PropTypes.object,
  actionProps: PropTypes.object,
  cancelProps: PropTypes.object,
  withConfirm: PropTypes.bool,
  withReset: PropTypes.bool,
  actionWrapperStyles: PropTypes.object,
};

export default props => (
  <FormProvider>
    <FormBuilder {...props} />
  </FormProvider>
);
