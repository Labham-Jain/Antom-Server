type DataType = {
  [x: string] : any;
}
const validateFields = (data: DataType) => {
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    const value = data[keys[i]];
    if(!value || value === ""){
      return false;
    }
  }
  return data;
}
export default validateFields