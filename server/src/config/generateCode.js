const generateCode = (codeLength)=>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortCode = '';
    for(let i=0;i<codeLength;i++){
        shortCode += characters.charAt(Math.floor(Math.random()*64))//64 is the length of characters string
    }
    return shortCode
}
export default generateCode