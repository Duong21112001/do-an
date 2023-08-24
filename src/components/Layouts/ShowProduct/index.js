import React, { useEffect, useState } from 'react';
import './style.css';
import Product from './components/Product';
import { useLocation, useParams } from 'react-router-dom';
import Loadding from '../../Loadding';

function ShowProduct() {
    const { name } = useParams();
    const productType = name ? name : '';

    const [dataProduct, setDataProduct] = useState([]);
    const [data, setData] = useState([]);
    const [value, setValue] = useState('newProduct');
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    let adc = location;

    // Function to generate a random size (number from 1 to 4)
    const getRandomSize = () => {
        return Math.floor(Math.random() * 4) + 1;
    };

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

                // Add random size field to each product object
                const dataWithRandomSize = tasks.map((product) => ({
                    ...product,
                    size: getRandomSize(),
                }));

                setDataProduct(dataWithRandomSize);
                setData(dataWithRandomSize);
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
        console.log(adc.state);
        if (adc.state) {
            setData(adc.state)
        }
    }, [])
    useEffect(() => {
        if (!adc.state) {
            getDataProduct();
        }
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
        } else if (selectedValue === '4') {
            // Sort by size from high to low (descending order)
            setData([...data].sort((a, b) => b.size - a.size));
        } else if (selectedValue === '5') {
            // Sort by size from high to low (descending order)
            setData([...data].sort((a, b) => a.size - b.size));
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
                                <option value='4'>lọc theo size từ thấp lên cao</option>
                                <option value='5'>lọc theo size cao đến thấp</option>
                            </select>
                        </div>
                        {isLoading ? <Loadding /> : <Product dataProduct={data} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowProduct;