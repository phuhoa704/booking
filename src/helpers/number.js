export const formatChangeNumber = (value) => {
    if(!value){
        return ''
      }
      else{
        value = value.replace(/^0+(?=\d)|[^0-9]/g, '');
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      }
}