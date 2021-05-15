import React, { useState } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CInput,

    CInputGroup,

    CInputGroupPrepend,

    CInputGroupText,
    CLabel,
    CRow,
    CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
const axios = require('axios').default;


const AddProduct = () => {
    const { control, handleSubmit, register, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // const [categoryId, setCategoryId] = React.useState("");
    // const [isFeatured, setIsFeatured] = React.useState(0);
    // let x =  1;

    const onHandlerSubmit = (value) => {
        console.log('value', value);
        setError(null);
        setLoading(true)
    }
    console.log(errors);
    return (
        <>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Category
                        </CCardHeader>
                        <CCardBody>
                            <CForm onSubmit={handleSubmit(onHandlerSubmit)}>
                                <br />
                                {
                                    error &&
                                    <p className="text-danger">
                                        {error}
                                    </p>
                                }
                                <CRow>
                                    <CCol xs="8">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Category</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="categoryId"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Categoty is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Category" autoComplete="category" />}
                                                    // render={({ field }) => <CInput  {...register("categoryId")} type="text" placeholder="Category" autoComplete="category" />}
                                                />
                                                {/* <input  {...register("category")} /> */}
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="8">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Featured Category</CLabel>
                                            <CInputGroup className="mb-3">

                                                <Controller
                                                    name="freatured"
                                                    control={control}
                                                    // defaultValue={isFeatured}
                                                    
                                                    render={({ field }) => <CSwitch
                                                        {...field}
                                                        key={1}
                                                        color="success"
                                                        // checked
                                                        // value={isFeatured}
                                                        // {...x}
                                                    /> }
                                                />
                                                
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Category'}</button>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

        </>
    )
}

export default AddProduct
