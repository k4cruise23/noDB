// const staff = require('../staff')
// const axios = require('axios')

// module.exports = {
//     getStaff: (req, res) => {
//         const staffArr = []
//         const staff1 = Math.ceil(Math.random() * 13)
//         const staff2 = Math.ceil(Math.random() * 13)
//         const staff3 = Math.ceil(Math.random() * 13)
//         axios.get(`/api/staff/${staff1}`).then(res => {
//             staffArr.push(res.staff)
//             axios.get(`api/staff/${staff2}`).then(res => {
//                 staffArr.push(res.staff)
//                 axios.get(`/api/staff/${staff3}`).then(res => {
//                     staffArr.push(`api/staff/${res.staff3}`)
                    
//                 })
//             })
//         })
//         res.status(200).send(staffArr)
//     }
// }

