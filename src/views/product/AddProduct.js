import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const AddProduct = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)

    return (
        <>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Product
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CLabel htmlFor="ccmonth">Category</CLabel>
                                        <CSelect custom name="ccmonth" id="ccmonth">
                                            <option value="1">Category 1</option>
                                            <option value="2">Category 2</option>
                                        </CSelect>
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CLabel htmlFor="ccyear">Sub Category</CLabel>
                                        <CSelect custom name="ccyear" id="ccyear">
                                            <option>Sub category 1</option>
                                            <option>Sub category 2</option>
                                        </CSelect>
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Product</CLabel>
                                        <CInput id="name" placeholder="Enter your product" required />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="8">
                                    <button className="btn btn-success" type="button">Add Product</button>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            
        </>
    )
}

export default AddProduct
