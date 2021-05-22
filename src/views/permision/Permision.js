import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CLink,
    CSwitch
} from '@coreui/react'


const Permision = () => {
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Permision
                    </CCardHeader>
                    <CCardBody>
                        {/* <CDataTable>

                        </CDataTable> */}
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Create</th>
                                    <th scope="col">View</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Admin</th>
                                    <td>
                                        <CSwitch
                                            key={1}
                                            color="success"
                                        // checked
                                        // value={isFeatured}
                                        // {...x}
                                        />
                                    </td>
                                    <td>
                                        <CSwitch
                                            key={1}
                                            color="success"
                                        // checked
                                        // value={isFeatured}
                                        // {...x}
                                        />
                                    </td>
                                    <td>
                                        <CSwitch
                                            key={1}
                                            color="success"
                                        // checked
                                        // value={isFeatured}
                                        // {...x}
                                        />
                                    </td>
                                    <td>
                                        <CSwitch
                                            key={1}
                                            color="success"
                                        // checked
                                        // value={isFeatured}
                                        // {...x}
                                        />
                                    </td>
                                    <td>
                                        <button className="btn btn-success" type="submit">Change Permision</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Vendor</th>
                                    <td>
                                        <CSwitch
                                            key={1}
                                            color="success"
                                        // checked
                                        // value={isFeatured}
                                        // {...x}
                                        />
                                    </td>
                                    <td>
                                        <CSwitch
                                            key={1}
                                            color="success"
                                        // checked
                                        // value={isFeatured}
                                        // {...x}
                                        />
                                    </td>
                                    <td>
                                        <CSwitch
                                            key={1}
                                            color="success"
                                        // checked
                                        // value={isFeatured}
                                        // {...x}
                                        />
                                    </td>
                                    <td>
                                        <CSwitch
                                            key={1}
                                            color="success"
                                        // checked
                                        // value={isFeatured}
                                        // {...x}
                                        />
                                    </td>
                                    <td>
                                        <button className="btn btn-success" type="submit">Change Permision</button>
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

export default Permision;
