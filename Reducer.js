import React from 'react';
import {popularData} from './assets/data/popularData';


const istate={
    name:"nabeel",
    data:{popularData},

 
}

const reducer=(state=istate,action)=>{

    if(action.type=="change_name"){
        return{
            name:action.payload
        }
    }

    return state;

}


export default reducer;

