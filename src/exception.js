export class MyException extends Error {

};

export const callMe = (name) => {
    if(name == "ichwan") {
        throw new MyException("Ups my exception happens");
    } else {
        return "OK"
    }
};
