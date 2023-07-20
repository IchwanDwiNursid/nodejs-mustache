export function sayHelloAsync(name){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(name){
                resolve (`Hello ${name}`);
            }else{
                reject ('Name Is Empty');
            }
        },2000)
    })
};

export const getBalance = async (name,from) => {
    const balance = await from();
    return {name : name ,
            balance : balance
           };
}
