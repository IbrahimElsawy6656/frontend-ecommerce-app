import Axios from "axios";
Axios.defaults.withCredentials = true;

// --------------------------------- CART ------------------------------------------

//data = {product_id: XXX}

export const addToCart = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/get-cart", { withCredentials: true }).then(res => {

        if (!res.data.message) {

            let result = res.data.filter(item => {
                return item.product_id === data.product_id
            });

            if (result.length > 0) {
                data.quantity = result[0].quantity + 1;
                updateCart(data);
            }
            else {
                Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/add-to-cart", data, { withCredentials: true });
            }
        }
        else {
            Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/add-to-cart", data, { withCredentials: true });
        }

    })

export const getCart = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/get-cart", { withCredentials: true })

//data = {product_id: XXX}
export const deleteFromCart = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/delete-from-cart", data, { withCredentials: true })

export const deleteAllCart = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/delete-cart", { withCredentials: true })

//data = {product_id: XXX, quantity: XXX}
export const updateCart = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/update-cart", data, { withCredentials: true })


// --------------------------------- PROMO ------------------------------------------

//data = {promo_code: XXX, status: XXX}
export const updatePromo = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/promo/update-promo", data, { withCredentials: true })

//data = {promo_code: XXX, discount: XXX}
export const addPromo = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/promo/add-promo", data, { withCredentials: true })

export const checkPromo = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/promo/check-promo", data, { withCredentials: true })


// --------------------------------- ORDER ------------------------------------------

//data = { promo_code: XXX }
export const addOrder = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/orders/add-order", data, { withCredentials: true })

export const getAllOrders = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/orders/get-all-orders", { withCredentials: true })

export const deleteOrder = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/orders/delete-order", { withCredentials: true })

export const getMyOrder = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/orders/get-my-order", data, { withCredentials: true })


// --------------------------------- USER ------------------------------------------

//data = {email, password, type, address, date_of_birth, full_name }
export const addUser = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/users/add-user", data, { withCredentials: true })

export const isAuth = () =>
    Axios.get("https://backend-ecommerce-app.herokuapp.com/users/isAuth", { withCredentials: true })

//data = {email, password}
export const login = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/users/login", data, { withCredentials: true })

export const getAllUsers = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/users/get-all-users", { withCredentials: true })

export const logout = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/users/logout", { withCredentials: true })

// --------------------------------- PRODUCT ------------------------------------------

//data = {product_id}

export const getProduct = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/products/get-product", data, { withCredentials: true })

export const getAllProducts = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/products/get-all-products", { withCredentials: true })
