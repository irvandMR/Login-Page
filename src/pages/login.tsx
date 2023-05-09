import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useFormik } from 'formik';
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from 'react';

const LoginPage = () => {
    
    const navigate = useNavigate()
    const toast = useRef(null);

    // const show = () => {
    //     toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.userName });
    // };

    const formik = useFormik({
        initialValues: {
            userName: 'GardenAdmin',
            password: 'GardenAdmin',
            parameters: {
                clientId:'11' ,
                roleId: '102',
                organizationId:'11' ,
                warehouseId:'' ,
                language: 'en_US'
            }
        },

        // validate: (data) => {
        //     let errors = {};

        //     if (!data.userName) {
        //         errors.userName = 'Username is required.';
        //     }

        //     if (!data.password) {
        //       errors.password = 'Password is required.';
        //     }

        //     return errors;
        // },
        onSubmit: (data) => {
            // data && show(data);
            axios.post('https://demo.globalqss.com/api/v1/auth/tokens', data)
            .then(res => {
                localStorage.setItem("auth", res.data.token);
                navigate("/assetPage")

            })
            formik.resetForm();
        }
    });

    // const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    // const getFormErrorMessage = (name) => {
    //     return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    // };


    return (
        <div className=" flex justify-content-center mt-5">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2 shadow-4 p-5 ">
            
                    <label htmlFor="input_value">Username</label>
                    <Toast ref={toast} />
                    <InputText
                        id="userName"
                        name="userName"
                        value={formik.values.userName}
                        onChange={(e) => {
                            formik.setFieldValue('userName', e.target.value);
                        }}
                        // className={classNames({ 'p-invalid': isFormFieldInvalid('userName') })}
                    />
                
                {/* {getFormErrorMessage('userName')} */}

            
                    <Toast ref={toast} />
                    <label htmlFor="input_value">Password</label>
                    <InputText
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={(e) => {
                            formik.setFieldValue('password', e.target.value);
                        }}
                        // className={classNames({ 'p-invalid': isFormFieldInvalid('password') })}
                    />
                
                {/* {getFormErrorMessage('password')} */}

                <label htmlFor="client">Client</label>
                    <Toast ref={toast} />
                    <InputText
                        id="client"
                        name="client"
                        value={formik.values.parameters.clientId}
                        onChange={(e) => {
                            formik.setFieldValue('client', e.target.value);
                        }}
                        // className={classNames({ 'p-invalid': isFormFieldInvalid('userName') })}
                    />
                <Button type="submit" label="Submit"/>
            </form>
        </div>
    )
}

export default LoginPage