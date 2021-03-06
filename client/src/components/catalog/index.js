import React, {useEffect, useContext, useState} from 'react'
import TypeBar from '../typebar/typebar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CertificateList from '../catalog/certificate-list'
import {observer} from 'mobx-react-lite'
import {Context} from '../../index'
import styled from 'styled-components'
import {fetchCategory} from '../../http/certificate-API'
import {fetchCertificates} from '../../http/certificate-API'
import Sidebar from './sidebar/sidebar'
import Slider from './slider/slider'
import CNavbar from './cnavbar/cnavbar'




export const CatalogContainer = styled.div`
    height: 900px;
    display: flex; 
    flex-direction: column;
    background: #000;
    // justify-content: center;
    // align-items: center;
`
export const ItemContainer = styled.div`
    height: 900px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
`

const CatalogPage = observer (() => {
    const {certificate} = useContext(Context)

    useEffect(() => {
        fetchCategory().then(data => certificate.setCategory(data))
        fetchCertificates(null).then(data => certificate.setCertificates(data))
    }, [])

    useEffect(() => {
        fetchCertificates(certificate.selectedCategory.id).then(data => {
            certificate.setCertificates(data)})
    }, [certificate.selectedCategory])

    return (
        <CatalogContainer>
            <CNavbar />


            {/* <Sidebar /> */}
            {/* <Slider /> */}
            {/* <TypeBar /> */}


            <CertificateList />
        

        </CatalogContainer>
    )
})

export default CatalogPage