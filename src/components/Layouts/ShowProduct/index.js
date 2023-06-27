import React, { useEffect, useState } from 'react'

import './style.css'
import Product from './components/Product'
// lấy ra tất cả sản phẩm
import { dataProduct } from "../../../dataProduct.js";
import _ from 'lodash';
import { useParams } from 'react-router-dom';

function ShowProduct() {
    const name = useParams()
    // 1 state sản phẩm 
    const [data, setData] = useState(dataProduct)
    const [value, setValue] = useState('newProduct')

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
        if (name.name === "thu-nhoi-bong") {

            setData(dataProduct.filter(item => item.titleProduct === "Thú nhồi bông"))
        }
        else if (name.name === "gau-hoat-hinh") {
            setData(dataProduct.filter(item => item.titleProduct === "Gấu hoạt hình"))
        }
        else if (name.name === "goi-bong") {
            setData(dataProduct.filter(item => item.titleProduct === "Gối bông"))
        }
        else if (name.name === "hang-moi-ve") {
            setData(dataProduct.filter(item => item.titleProduct === "Hàng mới về"))
        }
        else {
            setData(dataProduct)
        }
    }, [name.name])
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