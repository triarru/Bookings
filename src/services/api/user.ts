import { instance } from './api';

const getUser = () => instance.get('/api/user');

export const getAllUser = async () =>
    new Promise((resolve, reject) => {
        // eslint-disable-next-line import/no-named-as-default-member
        getUser()
            .then(async (response) => {
                console.log("Get success: ", response);
            })
            .catch((error) => {
                console.log("Get failed: ", error);
            });
    });