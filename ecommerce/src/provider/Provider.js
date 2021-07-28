import React, { useState } from 'react';
import Context from './context';

function Provider({ children }) {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    const filterOrder = (products, filter, sort) => {
        if (sort === "growing") return products.sort((a, b) => {
            if (a[filter] > b[filter]) return 1
            if (a[filter] < b[filter]) return -1
            return 0
        })
        if (sort === "decreasing") return products.sort((a, b) => {
            if (a[filter] < b[filter]) return 1
            if (a[filter] > b[filter]) return -1
            return 0
        })
    }
    const context = {
        cart,
        products,
        setProducts,
        setCart,
        formatCurrency,
        filterOrder,
    }
    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>

    )
}

export default Provider;