// for loop

// for(let i =0;i<=10;i++){
//     // console.log(i)
// }
// print from 10 to 0
for (let i=10; i>=0;i--){
    // console.log(i)
}

// Wap to check a every number from 1 to 20 if it is even or odd

// for(i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(`${i}: even`)
//     }
//     else{
//         console.log(`${i}: odd`)
//     }
// }

// Wap to check if a number is prime or not

const checkPrime = (num) =>{

    let flag = true

    if(num == 1){
        console.log('1 is neither prime nor composite')
    }else if(num > 1){
        for(let i=2; i<num;i++){
            if(num %i == 0){
                flag = false
                break;
            }
        }
        if(flag== true){
            console.log(`${num} is prime`)
        }else{
            console.log(`${num} is composite`)
        }
    }

}

// checkPrime(21)

// getting values from arrays

const array1 = [1,2,3,4,5,6,"Saad"]
for(i=0;i<array1.length;i++){
    console.log(array1[i])
}