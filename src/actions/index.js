import {
    FETCH_REQUEST,
    REQUEST_SUCCESS,
    REQUEST_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_OUT,
    INIT_ROUTES
} from './ActionTypes';

export const request = (payload) => {
    return {
        type: FETCH_REQUEST,
        payload
    }
}

export const request_success = (data) => {
    return {
        type: REQUEST_SUCCESS,
        data
    }
}

export const request_fail = (error) => {
    return {
        type: REQUEST_FAIL,
        error
    }
}

export const login_success = (data) => {
    return {
        type: LOGIN_SUCCESS,
        data
    }
}

export const login_fail = (error) => {
    return {
        type: LOGIN_FAIL,
        error
    }
}

export const login_out = () => {
    return {
        type: LOGIN_OUT
    }
}

export const init_routes = (routes) => {
    return {
        type: INIT_ROUTES,
        routes
    }
}