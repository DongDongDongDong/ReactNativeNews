/**
 * Created by wei on 2017/5/27.
 */
export default class AIRequest{
    static PostWithJsonParam(url,param,success,failure){
        var paramStr = JSON.stringify(param);
        var requestDesc = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:paramStr
        };

        fetch(url,requestDesc)
            .then((response)=>response.json())
            .then((json)=>{
                success(json);
            })
            .catch((error)=>{
                failure(error);
            })
    }


    static GET(url,param,success,failure){
        var totalParamStr = '';
        var jsonStr = JSON.stringify(param);
        if (jsonStr != '{}' && jsonStr != 'null'){
            var mark = '?';
            var i = 0;
            for (key in param){
                if (i > 0){
                    mark = '&'
                }
                var value = param[key];
                var paramStr = mark + key + '=' + value;
                totalParamStr += paramStr;
                i ++;
            }
            url += totalParamStr;
        }

        console.log(url)
        console.log('send Request')
        fetch(url)
            .then((response)=>response.json())
            .then((json)=>{
            success(json)
            })
            .catch((error)=>{
                failure(error)
            })
    }

}