import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar({open,handleClose}) {
  return (
    <div>
      <Snackbar open={open.open} autoHideDuration={400} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"center" }}>
        <Alert onClose={handleClose} severity={open.severity} >
          {open.severity==="success"?"Correct!":"Wrong!"}
        </Alert>
      </Snackbar>
    </div>
  );
}