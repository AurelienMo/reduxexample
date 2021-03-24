import React from 'react';
import {connect} from "react-redux";

let Detail = (props) => {
    const covidStats = props.stats;
    return (
        <div>
            <h1>Detail</h1>
            <ul>
                <li>Nouveau : {covidStats.newConfirm}</li>
                <li>Total : {covidStats.totalConfirm}</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.covid);
    return {
        stats: state.covid
    }
}

Detail = connect(mapStateToProps)(Detail);

export default Detail;
