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


const Categories = () => {
    return(
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Categories
                            <button style={{ float: 'right' }} className="btn btn-success">
                            <CLink className="c-subheader-nav-link" to="/add-category">
                                Add Category
                                </CLink>
                        </button>
                        {/* <small  className="text-muted"> example</small> */}
                    </CCardHeader>
                    <CCardBody>
                        {/* <CDataTable>

                        </CDataTable> */}
                        category
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>    
    )

}

export default Categories;
