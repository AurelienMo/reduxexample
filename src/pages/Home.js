import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchGlobal} from "../store/actions/covid";

export const Home = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(data => {
                const action = fetchGlobal(data)
                dispatch(action);
            });
    }, [])
    return (
        <div>
            <h1>Homepage</h1>
        </div>
    )
}
