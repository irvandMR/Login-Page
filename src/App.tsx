// import { useState } from 'react'
import React, { useRef } from "react";
import './App.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useFormik } from 'formik';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import assetPage from "./pages/a_asset/AssetList";


function App() {

    const navigate = useNavigate()
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.userName });
    };

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.userName) {
                errors.userName = 'Username is required.';
            }

            if (!data.password) {
              errors.password = 'Password is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
            axios.post('https://demo.globalqss.com/api/v1/auth/tokens', data)
            .then(res => {
                localStorage.setItem("auth", res.data.token);
                navigate("/assetPage")

            })
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };


    return (
        <div className="card flex justify-content-center mt-5 shadow-4">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2 ">
                <span className="p-float-label">
                    <Toast ref={toast} />
                    <InputText
                        id="userName"
                        name="userName"
                        value={formik.values.userName}
                        onChange={(e) => {
                            formik.setFieldValue('userName', e.target.value);
                        }}
                        className={classNames({ 'p-invalid': isFormFieldInvalid('userName') })}
                    />
                    <label htmlFor="input_value">Username</label>
                </span>
                {getFormErrorMessage('userName')}

                <span className="p-float-label">
                    <Toast ref={toast} />
                    <InputText
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={(e) => {
                            formik.setFieldValue('password', e.target.value);
                        }}
                        className={classNames({ 'p-invalid': isFormFieldInvalid('password') })}
                    />
                    <label htmlFor="input_value">Password</label>
                </span>
                {getFormErrorMessage('password')}
                <Button type="submit" label="Submit"/>
            </form>
        </div>
    )
}

export default App