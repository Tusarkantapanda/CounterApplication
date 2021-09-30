const fourthCounter = (state = 0, action)=>{
    switch(action.type){
        case 'INCREMENT3':
            return state+1;
        default:
                return state;
    }
}

export default fourthCounter;