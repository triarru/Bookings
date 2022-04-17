import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from './api';


const login = (creds: any) => instance.post('/api/login', creds);
const signin = (creds: any) => instance.post('api/user', creds)

/**
 * Sign up with credentials (username and password)
 * @param username
 * @param password
 * @returns {Promise<null>}
 */
export const signUpWithCredentials = async (username: string, password: string) =>
    new Promise((resolve, reject) => {
        // eslint-disable-next-line import/no-named-as-default-member
        login({ username, password })
            .then(async (response) => {
                console.log("Login success: ", response);
                localStorage.setItem("token", JSON.stringify(response.data.access_token))
            })
            .catch((error) => {
                console.log("Login failed: ", error);
            });
    });

export const testLogin = createAsyncThunk("test/test",
    async ({ username, password }: any) => {
        const response = await instance.post('api/login', {
            username,
            password,
        })
        console.log(response)
    }
)

/**
* Sign in with credentials
* @param name
* @param username
* @param password
* @param email
* @returns {Promise<null>}
*/

export const signInWithCredentials = async (name: string, username: string, password: string, email: string) =>
    new Promise((resolve, reject) => {
        // eslint-disable-next-line import/no-named-as-default-member
        signin({ name, username, password, email })
            .then(async (response) => {
                console.log("Login success: ", response)
            })
            .catch((error) => {
                console.log("Login failed: ", error);
            });
    });