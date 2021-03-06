const axios = require('axios');

class FetchApiLoginModel{
    constructor(state){
        this.state = state;
    };

    fetchApiLoginModelCall(){
        var state = this.state;
        return new Promise(function(resolve, reject) {
            axios({
                method: 'POST',
                url: 'http://localhost:3001/login',
                headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                data: JSON.stringify(state)
                },
                
                )
                .then(function (response) {
                    resolve(response);
                    return response;
                })
                .catch(function (error) {
                    });
                });
    }
}

export default FetchApiLoginModel;