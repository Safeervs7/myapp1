import FetchApiLoginModel from '../model/loginModel';

class FetchApiLoginControl{
    constructor(state){
        this.FetchApiLoginModelObj = new FetchApiLoginModel(state);
    };
    fetchApiLoginControlCall(){
        var redirectHome = this.redirectHomeObj;
        var fetchApiLoginModelObj = this.FetchApiLoginModelObj;
        var response;
        async function main() {
            response = await fetchApiLoginModelObj.fetchApiLoginModelCall();
            return response;
          }
        return new Promise(function(resolve, reject) {
            main()
            .then(function (response) {
                resolve(response);
                return response;
            })
            .catch(function (error) {
                });
        });
    }
}

export default FetchApiLoginControl;