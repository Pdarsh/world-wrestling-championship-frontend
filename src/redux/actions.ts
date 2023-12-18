import { Dispatch } from 'redux';
import { Wrestler } from '@/shared/shared-types';
import { getWrestlers } from './wrestler-slice';
import axios from "axios";


export const fetchWrestlers = () => async (dispatch: Dispatch) => {
    try {
        const apiUrl = "http://localhost:3001/wrestlers";
        const response = await axios.get(apiUrl);
        const data: Wrestler[] = response.data.data;
        dispatch(getWrestlers(data));
    } catch (error) {
        console.error('Error fetching wrestlers:', error);
    }
};
