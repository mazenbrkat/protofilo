import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './main.jsx';
import reportWebVitals from './reportWebVitals';
import { register } from './serviceWorkerRegistration';

// تم نقل نقطة الدخول إلى main.jsx

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Register service worker for PWA (build/production)
if (process.env.NODE_ENV === 'production') {
  register();
}
