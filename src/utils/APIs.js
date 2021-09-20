import Axios from "axios";
Axios.defaults.withCredentials = true;

// --------------------------------- CART ------------------------------------------

//data = {product_id: XXX}

export const addToCart = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/get-cart").then(res => {

        if (!res.data.message) {

            let result = res.data.filter(item => {
                return item.product_id === data.product_id
            });

            if (result.length > 0) {
                data.quantity = result[0].quantity + 1;
                updateCart(data);
            }
            else {
                Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/add-to-cart", data);
            }
        }
        else {
            Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/add-to-cart", data);
        }

    })

export const getCart = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/get-cart")

//data = {product_id: XXX}
export const deleteFromCart = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/delete-from-cart", data)

export const deleteAllCart = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/delete-cart")

//data = {product_id: XXX, quantity: XXX}
export const updateCart = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/cart/update-cart", data)


// --------------------------------- PROMO ------------------------------------------

//data = {promo_code: XXX, status: XXX}
export const updatePromo = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/promo/update-promo", data)

//data = {promo_code: XXX, discount: XXX}
export const addPromo = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/promo/add-promo", data)

export const checkPromo = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/promo/check-promo", data)


// --------------------------------- ORDER ------------------------------------------

//data = { promo_code: XXX }
export const addOrder = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/orders/add-order", data)

export const getAllOrders = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/orders/get-all-orders")

export const deleteOrder = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/orders/delete-order")

export const getMyOrder = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/orders/get-my-order", data)


// --------------------------------- USER ------------------------------------------

//data = {email, password, type, address, date_of_birth, full_name }
export const addUser = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/users/add-user", data)

export const isAuth = () =>
    Axios.get("https://backend-ecommerce-app.herokuapp.com/users/isAuth")

//data = {email, password}
export const login = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/users/login", data)

export const getAllUsers = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/users/get-all-users")

export const logout = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/users/logout")

// --------------------------------- PRODUCT ------------------------------------------

//data = {product_id}

export const getProduct = (data) =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/products/get-product", data)

export const getAllProducts = () =>
    Axios.post("https://backend-ecommerce-app.herokuapp.com/products/get-all-products")
