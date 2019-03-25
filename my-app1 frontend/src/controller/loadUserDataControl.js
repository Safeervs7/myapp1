import LoadUserDataModel from '../model/loadUserDataModel';

class LoadUserDataControl{
    constructor(){
    }

    loadUserData(){
        var loadUserDataModelObj = new LoadUserDataModel();
        var userData = loadUserDataModelObj.loadUserData();
        return userData;
    }
}

export default LoadUserDataControl;