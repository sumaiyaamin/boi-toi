const getReadList =()=>{
  const storeReadstr =localStorage.getItem('read-list')
  if(storeReadstr){
    const storeReadList = JSON.parse(storeReadstr);
    return storeReadList;
  }
  else{
    return [];
  }


}

const addtoReadList = (id) =>{
  const storeRead = getReadList();

  if(storeRead.includes(id)){
    console.log(`Already Exists`);
  }
  else{
    storeRead.push(id);

    const storeReadstr = JSON.stringify(storeRead);
    localStorage.setItem('read-list', storeReadstr)
  }


}

const getWish =()=>{

  const getWishStr = localStorage.getItem('wish-list')

  if(getWishStr){
    const getWishList = JSON.parse(getWishStr);
    return getWishList;
  }
  else{
    return [];
  }
}

const setWish =(id) =>{
  const setWishList = getWish();

  if(setWishList.includes(id)){
    console.log('already in the wishlist');
  }
  else{
    setWishList.push(id);

    const setWishstr = JSON.stringify(setWishList)
    localStorage.setItem('wish-list', setWishstr)
  }
}

export { addtoReadList , setWish}