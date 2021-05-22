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

// import usersData from '../users/UsersData'
import productsData from './ProductsData'



const Products = () => {
    const history = useHistory()
    const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
    const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
    const [page, setPage] = useState(currentPage)

    const pageChange = newPage => {
        currentPage !== newPage && history.push(`/products?page=${newPage}`)
    }

    useEffect(() => {
        currentPage !== page && setPage(currentPage)
    }, [currentPage, page])
    const getBadge = status => {
        switch (status) {
            case 'Active': return 'success'
            case 'Inactive': return 'secondary'
            case 'Pending': return 'warning'
            case 'Banned': return 'danger'
            default: return 'primary'
        }
    }
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Products
                        <button style={{ float: 'right' }} className="btn btn-success">
                            <CLink className="c-subheader-nav-link" to="/add-product">
                                Add Product
                            </CLink>
                        </button>
                      {/* <small  className="text-muted"> example</small> */}
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={productsData}
                            fields={[
                                { key: 'name', _classes: 'font-weight-bold' },
                                'category', 'sub_category', 'created_at'
                            ]}
                            hover
                            striped
                            itemsPerPage={5}
                            activePage={page}
                            clickableRows
                            // onRowClick={(item) => history.push(`/users/${item.id}`)}
                            scopedSlots={{
                                'status':
                                    (item) => (
                                        <td>
                                            <CBadge color={getBadge(item.status)}>
                                                {item.status}
                                            </CBadge>
                                        </td>
                                    )
                            }}
                        />
                        <CPagination
                            activePage={page}
                            onActivePageChange={pageChange}
                            pages={2}
                            doubleArrows={false}
                            align="center"
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Products