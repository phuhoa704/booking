export const randomVoucherCode = () => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charactersLength = characters.length;
    for(let i = 0; i < 4; i++){
      result = result + characters.charAt(Math.floor(Math.random() * charactersLength)) + Math.floor(Math.random() * 10);
    }
    return result;
  }