import React, { Component } from 'react';
import './css/loadUserData.css';
import LoadUserDataControl from '../../controller/loadUserDataControl'

class LoadUserData extends Component {

    constructor(props) {
        super(props);
    }

    fetchData(){
        var LoadUserDataControlObj = new LoadUserDataControl();
        var json = LoadUserDataControlObj.loadUserData();
        return json;
    }

    render() {
        if(this.props.login){
            var fetchedData = this.fetchData();
        }
        if(!fetchedData){
            return <div><h1>Testing {this.props.login}</h1></div>
        }
        else{
            var style = {
                            'backgroundColor': 'rgba(81, 132, 129, 0.53)', 
                            'border': '1px solid blue',
                            'borderRadius': '5px',
                            'padding': '5px', 
                            'margin': '5px 20px'
                
                        }
            var fetchingDataView = (() =>{
                var fetchedDataView = fetchedData.map((data) =>
                    <div className="card-body  col-sm-4 col-md-3" style={style}>
                        <h5 className="card-title">{data.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Qnty: {data.count}</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                );
                return fetchedDataView;
            });
            var fetchedDataView = fetchingDataView();
            
            return  <div className="card" >
                        {fetchedDataView}
                    </div>
        }
    }
}

export default LoadUserData;