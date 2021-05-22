import React, { useState } from 'react'
import {
    // CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CInputFile,
    CInputGroup,
    CLabel,
    CRow,
    CTextarea
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
const axios = require('axios').default;


const AddBanner = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [bannerImage, setBannerImage] = useState('');
    const [shortOrder, setShortOrder] = useState('');
    const [content, setContent] = useState('');

    //* banner
    const bannerOnChange = (e) => {
        setBannerImage(e.target.files[0]);
    }
    //* short order 
    const shortOrderOnChange = (e) => {
        setShortOrder(e.target.value);
    }
    //* content 
    const contentOnChange = (e) => {
        setContent(e.target.value);
    }
  
    const onHandlerSubmit = (e) => {
        e.preventDefault();
        // console.log('value', value);
        // console.log('bannerImage', bannerImage);
        setError(null);
        setLoading(true);

        const formData = new FormData();
        formData.append('bannerImage', bannerImage);
        formData.append('shortOrder', shortOrder);
        // console.log(formData);
        
        // axios.post('http://localhost:8000/banner/', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        // .then(response => {
        //     setLoading(false);
        //     // setUserSession(response.data.token, response.data.user);
        //     // history.push('/banners')
        //     console.log(response);
        // })
        // .catch(err => {
        //     setLoading(false);
        //     if (err.response.data.errorMessage) {
        //         setError(err.response.data.errorMessage);
        //     } else {
        //         setError("Something went wrong!");
        //     }
        // });
    }
    // console.log(errors);
    return (
        <>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Banner
                        </CCardHeader>
                        <CCardBody>
                            <CForm encType="multipart/form-data" onSubmit={onHandlerSubmit}>
                                <br />
                                {
                                    error &&
                                    <p className="text-danger">
                                        {error}
                                    </p>
                                }
                                <CRow>
                                    <CCol xs="8">
                                        <CLabel htmlFor="category">Banner</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose banner...
                                            </CLabel>
                                            {/* <Controller
                                                name="bannerImage"
                                                control={control}
                                                defaultValue={''}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: "Image file is required"
                                                    },
                                                }}
                                                render={({ field }) => <CInputFile {...field} onChange={onChange} custom id="bannerImage" />}
                                            /> */}
                                            <CInputFile onChange={bannerOnChange} custom id="bannerImage" type="file" />
                                        </CInputGroup>
                                        {/* <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText> */}
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="8">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Short Order</CLabel>
                                            <CInputGroup className="mb-3">

                                                {/* <Controller
                                                    name="shortOrder"
                                                    control={control}
                                                    render={({ field }) => <CInput
                                                        {...field}
                                                        type="text" placeholder="Short Order" autoComplete="short order"
                                                    /> }
                                                /> */}
                                                <CInput type="text" onChange={shortOrderOnChange} value={shortOrder} placeholder="Short Order" autoComplete="short order" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="8">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Content</CLabel>
                                            <CInputGroup className="mb-3">
                                                {/* <CInput type="text" onChange={shortOrderOnChange} value={shortOrder} placeholder="Short Order" autoComplete="short order" /> */}
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="3"
                                                    onChange={contentOnChange} value={content}
                                                ></CTextarea>
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Banner'}</button>
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

export default AddBanner
