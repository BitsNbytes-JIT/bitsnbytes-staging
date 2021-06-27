// const axios = require('axios');



// //Register User
// export const registerUser = (userData) => dispatch => {
//   console.log("Sending The request!!");
//   axios
//     .post("http://localhost:8080/mem/register", userData)
//     .then(res => {
//       console.log(res.status)
//       console.log(res.data)
//     })
//     .catch(err =>
//       dispatch({
//         payload: err.response.data
//       })
//     );
// };