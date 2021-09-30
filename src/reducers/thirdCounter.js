const thirdCounter = (state = 0, action)=>{
    switch(action.type){
        case 'INCREMENT2':
            return state+1;
        default:
                return state;
    }
}

export default thirdCounter;