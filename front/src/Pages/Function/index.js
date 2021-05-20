import axios from "axios";

export const getAxios = (_path, _data) => {
    return axios.get(_path, _data).then(res => {
        return res.data
    });
};
