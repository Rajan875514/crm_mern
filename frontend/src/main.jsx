// // // frontend/src/main.jsx
// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import App from './App.jsx';
// // import './index.css'; // यह आपकी Tailwind CSS और अन्य कस्टम स्टाइल को इंपोर्ट करता है
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // // Bootstrap CSS को हटाएँ या कमेंट आउट कर दें
// // // import 'bootstrap/dist/css/bootstrap.min.css';

// // // अगर आपने Bootstrap JS भी इंपोर्ट किया है, तो उसे भी हटा दें या कमेंट आउट कर दें
// // // import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// // );



















// // frontend/src/index.js (or main.jsx)
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom'; // <--- Import Router here

// import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // Make sure Bootstrap JS is imported for togglers etc.
// import 'react-toastify/dist/ReactToastify.css'; // Toastify CSS

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router> {/* <--- Wrap App with Router here */}
//       <App />
//     </Router>
//   </React.StrictMode>
// );





















// frontend/src/index.js or frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);