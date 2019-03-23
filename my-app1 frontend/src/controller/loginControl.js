import fetchApiLoginModel from '../model/loginModel';

class fetchApiLoginControl{
    constructor(state){
        this.fetchApiLoginModelObj = new fetchApiLoginModel(state);
    };
    fetchApiLoginControlCall(){
        var redirectHome = this.redirectHomeObj;
        var fetchApiLoginModelObj = this.fetchApiLoginModelObj;
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

export default fetchApiLoginControl;