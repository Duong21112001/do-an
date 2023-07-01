import React, { useEffect, useState } from 'react'

import './style.css'
import Product from './components/Product'
// lấy ra tất cả sản phẩm
import _ from 'lodash';
import { useParams } from 'react-router-dom';

function ShowProduct() {
    const name = useParams()
    const productType = name.name ? name.name : "show-all"

    // 1 state sản phẩm 
    const [dataProduct, setDataProduct] = useState([])
    const [data, setData] = useState(dataProduct)
    const [value, setValue] = useState('newProduct')

    const getDataProduct = async () => {
        try {
            const response = await fetch('https://649be5960480757192371734.mockapi.io/product', {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            });

            if (response.ok) {
                const tasks = await response.json();
                setDataProduct(tasks);
            } else {
                throw new Error('Network response was not OK.');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        getDataProduct()
    }, [])

    const myChange = e => {
        const selectedValue = e.target.value;
        setValue(selectedValue);

        if (selectedValue === "1") {
            setData(dataProduct);
        }
        if (selectedValue === "2") {
            setData(_.orderBy(data, ['titlePrice'], ['asc']));
        }
        if (selectedValue === "3") {
            setData(_.orderBy(data, ['titlePrice'], ['desc']));
        }
    }
    useEffect(() => {
        if (productType === "thu-nhoi-bong") {

            setData(dataProduct.filter(item => item.titleProduct === "thú nhồi bông"))
        }
        else if (productType === "gau-hoat-hinh") {
            setData(dataProduct.filter(item => item.titleProduct === "gấu hoạt hình"))
        }
        else if (productType === "goi-bong") {
            setData(dataProduct.filter(item => item.titleProduct === "gối bông"))
        }
        else if (productType === "hang-moi-ve") {
            setData(dataProduct.filter(item => item.titleProduct === "hàng mới về"))
        }
        else {
            setData(dataProduct)
        }
    }, [productType])
    return (
        <div>
            <div className='show-product'>
                <div className='container'>
                    <div className='show-content'>
                        <div className='show-header'>
                            <span>Sắp xếp theo</span>
                            <select value={value} onChange={(e) => myChange(e)}>
                                <option value="1">Mới nhất</option>
                                <option value="2">Giá từ thấp đến cao</option>
                                <option value="3">Giá từ cao xuống thấp</option>
                            </select>
                        </div>
                        {/* truyền tất cả sản phẩm vào trong product */}
                        <Product dataProduct={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowProduct