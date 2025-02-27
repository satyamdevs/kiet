const SecretariatS = () => {
    return (
      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg mt-6 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center">Meet the Secretariat</h2>
        <p className="mt-2 text-center text-lg">
          Our dedicated secretariat ensures a seamless and impactful MUN experience.
        </p>
        <div className="flex flex-wrap justify-center mt-4 gap-4">
          <div className="bg-blue-800 p-4 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-sm">Secretary-General</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-sm">Deputy Secretary-General</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold">Alex Brown</h3>
            <p className="text-sm">Head of Logistics</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default SecretariatSection;
  