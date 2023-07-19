import React, { useEffect, useState } from 'react';
import './style.css';
import Product from './components/Product';
import { useParams } from 'react-router-dom';

function ShowProduct() {
    const { name } = useParams();
    const productType = name ? name : '';

    const [dataProduct, setDataProduct] = useState([]);
    const [data, setData] = useState([]);
    const [value, setValue] = useState('newProduct');
    const [isLoading, setIsLoading] = useState(true);

    const getDataProduct = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(
                `https://649be5960480757192371734.mockapi.io/product?titleProduct=${productType}`,
                {
                    method: 'GET',
                    headers: { 'content-type': 'application/json' },
                }
            );

            if (response.ok) {
                const tasks = await response.json();
                setDataProduct(tasks);
                setData(tasks);
            } else {
                throw new Error('Network response was not OK.');
            }
        } catch (error) {
            console.log('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getDataProduct();
    }, [productType]);

    const handleSortChange = (e) => {
        const selectedValue = e.target.value;
        setValue(selectedValue);

        if (selectedValue === '1') {
            setData(dataProduct);
        } else if (selectedValue === '2') {
            setData([...data].sort((a, b) => a.titlePrice - b.titlePrice));
        } else if (selectedValue === '3') {
            setData([...data].sort((a, b) => b.titlePrice - a.titlePrice));
        }
    };

    return (
        <div>
            <div className='show-product'>
                <div className='container'>
                    <div className='show-content'>
                        <div className='show-header'>
                            <span>Sắp xếp theo</span>
                            <select value={value} onChange={handleSortChange}>
                                <option value='1'>Mới nhất</option>
                                <option value='2'>Giá từ thấp đến cao</option>
                                <option value='3'>Giá từ cao xuống thấp</option>
                            </select>
                        </div>
                        {isLoading ? (
                            <div>Loading...</div>
                        ) : (
                            <Product dataProduct={data} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowProduct;
