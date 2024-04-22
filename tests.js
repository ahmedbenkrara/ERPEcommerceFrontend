const axios = require('axios')

// const s = async () =>{
//   try{
//     const response = await axios.get('http://127.0.0.1:8000/api/modules', {
//       headers : {
//           'Accept': 'application/vnd.api+json',
//           'Content-Type': 'application/vnd.api+json',
//           'Authorization': `Bearer 3|W4Qz4Vzo2dixjtrS2UehjT20LVnYi6y7Rfb2SHn4`,
//       }
//     })
//     console.log(response.data.data[0].relationships.images[0])
//   }catch(err){
//     console.log(err.response.status)
//   }
// }

// s()

// let items = []

// const addLocal = (item) =>{
//   items.push(item)
//   let data = JSON.stringify(items)
//   localStorage.setItem('cart', data)
// }

// let it = {
//   id : 1,
//   name : 'module1',
//   type : 'module'
// }

// addLocal(it)
// addLocal(it)



const s = async () =>{
  try{
    const response = await axios.get('http://127.0.0.1:8000/api/modules/184', {
      headers : {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          // 'Authorization': `Bearer 3|W4Qz4Vzo2dixjtrS2UehjT20LVnYi6y7Rfb2SHn4`,
      }
    })
    console.log(response.data.data)
  }catch(err){
    console.log(err.response.status)
  }
}

s()