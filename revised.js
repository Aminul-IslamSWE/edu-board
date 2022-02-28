
function jillur(){
    this.agecal = function (name,year){
        return` Hi ${ name},you are good boy .you are ${2021-year} years old`;
    }
    this.currency = function (type,amount){
        if (type=='d'){

            return amount*86;
        }else if (type=='p'){
            return amount*116;
        }else if (type =='e'){
            return amount*98;
        }
    }
    this.area =function (type,length,width){
        if (type=='s'){
            return length *length;
        }else if (type== 'r'){
            return length*width;
        }else if(type=='t'){

            return .5*length*width;
        }
    }


}
