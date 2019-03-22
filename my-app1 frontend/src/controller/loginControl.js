import fetchApiLoginModel from '../model/loginModel';
import RedirectHome from '../util/redirectHome';

class fetchApiLoginControl{
    constructor(state){
        this.fetchApiLoginModelObj = new fetchApiLoginModel(state);
        this.redirectHomeObj = new RedirectHome();
    };
    fetchApiLoginControlCall(){
        var redirectHome = this.redirectHomeObj;
        var fetchApiLoginModelObj = this.fetchApiLoginModelObj;
        var response;
        async function main() {
            response = await fetchApiLoginModelObj.fetchApiLoginModelCall();
            console.log("response:", response);
            redirectHome.setState({rediect: response.data.login});
          }
        main();
        return
    }
}

export default fetchApiLoginControl;