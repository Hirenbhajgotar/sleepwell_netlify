import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CPagination,
    CLink
} from '@coreui/react'


const Banners = () => {
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Banners
                            <button style={{ float: 'right' }} className="btn btn-success">
                            <CLink className="c-subheader-nav-link" to="/add-banners">
                                Add Banner
                                </CLink>
                        </button>
                        {/* <small  className="text-muted"> example</small> */}
                    </CCardHeader>
                    <CCardBody>
                        {/* <CDataTable>

                        </CDataTable> */}
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Banner</th>
                                    <th scope="col">Short Order</th>
                                    <th scope="col">Create at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img src={'banners/bee-6241306_1920.jpg'} className="img-fluid" width="120px" alt="" /></td>
                                    <td>1</td>
                                    <td>{new Date().toLocaleString() + ''}</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-outline-warning">Edit</button>
                                        <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td><img src={'banners/fairy-flower-6226285_1920.jpg'} className="img-fluid" width="120px" alt="" /></td>
                                    <td>2</td>
                                    <td>{new Date().toLocaleString() + ''}</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-outline-warning">Edit</button>
                                        <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td><img src={'banners/cherry-blossoms-5129078_1920.jpg'} className="img-fluid" width="120px" alt="" /></td>
                                    <td>3</td>
                                    <td>{new Date().toLocaleString() + ''}</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-outline-warning">Edit</button>
                                        <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )

}

export default Banners;
