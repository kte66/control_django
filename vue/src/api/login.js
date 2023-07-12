import request from "@/utils/request";
import QS from 'qs'
export function islogin(user_id, user_password) {
     return request({
         method : 'post',
         url : 'login/',
         data:QS.stringify({
            user_id:user_id,
            user_password:user_password,
        }),
    })

}