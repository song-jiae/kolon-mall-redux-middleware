function getProducts(keyword){
  return async(dispatch, getState)=>{
    let url = `https://my-json-server.typicode.com/song-jiae/kolon-mall/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    dispatch({type:"GET+PRODUCT", payload:{data}});
  };
}
export const productAction={getProducts}
