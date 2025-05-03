const Home = () => {
    return (
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-center p-16 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold mb-4">Welcome to the Lab Tracker!</h1>
        <p className="text-lg mb-6">Your personal dashboard for managing lab activities, assignments, and schedules.</p>
        
        <div className="space-x-4">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300"
            onClick={() => alert('Viewing labs...')}
          >
            View Labs
          </button>
          
          <button 
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg transition duration-300"
            onClick={() => alert('Accessing schedules...')}
          >
            View Schedule
          </button>
          
          <button 
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition duration-300"
            onClick={() => alert('Viewing assignments...')}
          >
            View Assignments
          </button>
        </div>
  
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Important Links:</h2>
          <ul className="text-lg space-y-2 mt-4">
            <li>
              <a href="/about" className="text-white hover:text-gray-300">About Us</a>
            </li>
            <li>
              <a href="/help" className="text-white hover:text-gray-300">Help</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Home;
  