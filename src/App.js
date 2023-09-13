import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className='card rounded shadow-sm'>
        <div className='card-body'>
<PrivacyPolicy />
        </div>
      </div>
    </div>
  );
}

const PrivacyPolicy = () => {
  return (
    <div className=" mt-5">
      <h1>Privacy Policy for Site Management System Mobile App</h1>
      <p>Last Updated: 13 September, 2023</p>

      <p>Welcome to Site Management System ("we," "our," or "us"). This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use our mobile application ("App"). We are committed to protecting your privacy and ensuring the security of your personal information.</p>

      <h2>1. Information We Collect</h2>
      <h3>1.1 Information You Provide</h3>
      <ul>
        <li>User Account Information: When you create an account, we may collect your name, email address, phone number, and other information necessary to set up and manage your account.</li>
        <li>Company Details: Information related to your company, such as its name, address, and other relevant business details.</li>
        <li>Client Details: Information about your clients, including their names, contact information, and any other details you choose to provide.</li>
        <li>Fix Asset Management Data: Data related to your company's fixed assets, including details about each asset, maintenance records, and depreciation information.</li>
        <li>Ticketing and Service Order Information: Information related to service requests, tickets, and service orders, including task details, scheduling, and updates.</li>
      </ul>

      <h3>1.2 Automatically Collected Information</h3>
      <p>We may also automatically collect certain information about your use of the App, including:</p>
      <ul>
        <li>Device Information: Information about your mobile device, such as its model, operating system, and unique device identifiers.</li>
        <li>Log Data: Information about your interactions with the App, including usage patterns, error logs, and performance data.</li>
        <li>Location Information: With your consent, we may collect your precise location information to provide location-based features within the App.</li>
      </ul>

      {/* Repeat the pattern for sections 2 to 7 */}

      <h2>2. How We Use Your Information</h2>
      <p>We use the collected information for the following purposes:</p>
      <ul>
        <li>To provide, maintain, and improve the App's functionality and services.</li>
        <li>To manage and organize company details, client information, and fixed asset data.</li>
        <li>To process and track service orders, tickets, and tasks.</li>
        <li>To communicate with you, including responding to your inquiries and providing customer support.</li>
        <li>To send you notifications and updates related to the App.</li>
        <li>To ensure the security and integrity of the App and its users.</li>
        <li>To comply with legal obligations and protect our rights and interests.</li>
      </ul>

      <h2>3. Sharing Your Information</h2>
      <p>We may share your personal information in the following situations:</p>
      <ul>
        <li>With third-party service providers who help us deliver and improve our services (e.g., hosting providers, analytics services).</li>
        <li>With other users or technicians within your organization, as necessary to manage tasks and assignments.</li>
        <li>When required by law or to protect our legal rights.</li>
        <li>In connection with a business merger, acquisition, or sale, if applicable.</li>
      </ul>

      <h2>4. Security</h2>
      <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.</p>

      <h2>5. Your Choices</h2>
      <p>You have the following choices regarding your personal information:</p>
      <ul>
        <li>You can review and update your account information at any time within the App.</li>
        <li>You can opt out of receiving non-essential communications from us.</li>
        <li>You can request the deletion of your account and associated data by contacting us.</li>
      </ul>

      <h2>6. Changes to this Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will provide notice of any material changes by posting the updated policy on the App.</p>

      <h2>7. Contact Us</h2>
      <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at</p>
      <p>17, Jalan Ekoperniagaan 2/6, Taman Ekoperniagaan 81100,Johor Bahru, Johor, Malaysia +60 7252 5675</p>

<br />
      <p>By using the Site Management System App, you consent to the practices described in this Privacy Policy.</p>

      <p>17, Jalan Ekoperniagaan 2/6, Taman Ekoperniagaan 81100,Johor Bahru, Johor, Malaysia +60 7252 5675</p>
    </div>
  );
};


export default App;


