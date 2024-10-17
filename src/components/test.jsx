// import React, { useState } from 'react';
// import { debounce } from 'lodash';
//
// function App() {
//     const [value, setValue] = useState('');
//
//     const handleChange = debounce((e) => {
//         setValue(e.target.value);
//     }, 300); // Delay updates by 300ms
//
//     return (
//         <div className='bg-white'>
//             <input type="text" onChange={handleChange} />
//             <p>Value: {value}</p>
//         </div>
//     );
// }

// export default App;

//
// import React, { useState } from 'react';
//
// function MultiInputForm() {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: ''
//     });
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData, // Spread the previous state
//             [name]: value // Update the specific field
//         });
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Data:', formData);
//     };
//
//     return (
//         <form onSubmit={handleSubmit} className='bg-white'>
//             <label>
//                 Username:
//                 <input
//                     type="text"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                 />
//             </label>
//             <br />
//             <label>
//                 Email:
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                 />
//             </label>
//             <br />
//             <label>
//                 Password:
//                 <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                 />
//             </label>
//             <br />
//             <button type="submit">Submit</button>
//         </form>
//     );
// }
//
// export default MultiInputForm;
