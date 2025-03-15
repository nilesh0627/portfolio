import Particle from "../Particle";
import TextField from '@mui/material/TextField';
import { Alert, Button, Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState();
    const [snackbarInfo, setSnackbarInfo] = useState({
        open: false,
        severity: 'error',
        message: ''
    });
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                'service_m06qcpc',
                'template_5j32d75',
                form.current,
                'wQiBTXlRBVSO9evNt'
            )
            .then(
                (result) => {
                    setSnackbarInfo({
                        open: true,
                        severity: 'success',
                        message: `Message sent successfully! ${result.text}`
                    })
                },
                (error) => {
                    setSnackbarInfo({
                        open: true,
                        severity: 'error',
                        message: `Failed to send message. Please try again. ${error.text}`
                    })
                }
            )
            .finally(() => setIsSubmitting(false));
    };
    const closeSnackbar = () => setSnackbarInfo({})
    return (
        <>
            <Particle />
            <div className='contact-wrapper'>
                <Typography variant="h4" gutterBottom>
                    Drop a <span className='primary'>Message!</span>
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Whether it's work or just a quick hello, I'm here to listen.
                </Typography>
                <form ref={form} className='contact' onSubmit={sendEmail}>
                    <TextField id="name" label="Name" variant="outlined" />
                    <TextField id="email" label="Email" type="email" variant="outlined" />
                    <TextField
                        id="message"
                        label="Description"
                        fullWidth
                        multiline
                        rows={5}
                    />
                    <Button loading={isSubmitting} variant="contained" type='submit'>Send</Button>
                    <Snackbar open={snackbarInfo.open} autoHideDuration={6000} onClose={closeSnackbar}>
                        <Alert
                            onClose={closeSnackbar}
                            severity={snackbarInfo.severity}
                            variant="filled"
                            sx={{ width: '100%' }}
                        >
                            {snackbarInfo.message}
                        </Alert>
                    </Snackbar>
                </form>
            </div>
        </>
    );
}