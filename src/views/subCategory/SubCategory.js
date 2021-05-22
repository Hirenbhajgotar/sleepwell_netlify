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


const SubCategories = () => {
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Sub Categories
                            <button style={{ float: 'right' }} className="btn btn-success">
                                <CLink className="c-subheader-nav-link" to="/add-sub-categories">
                                    Add Sub Category
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
                                    <th scope="col">Sub Category</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Short Order</th>
                                    <th scope="col">Create at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Shirt</td>
                                    <td>Man</td>
                                    <td>1</td>
                                    <td>{new Date().toLocaleString() + ''}</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-outline-warning">Edit</button>
                                        <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Saree</td>
                                    <td>Woman</td>
                                    <td>2</td>
                                    <td>{new Date().toLocaleString() + ''}</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-outline-warning">Edit</button>
                                        <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>T-Shirt</td>
                                    <td>Child</td>
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

export default SubCategories;
