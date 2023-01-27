 function snail(column,day,night){
    for(let i = 0; i = column; i++){
        let days = i
        if(day < column) {
           day -= night
        }
        else if(day == column){
            day = day
        }
         console.log(days)
    }
 }

 snail(10,3,1)