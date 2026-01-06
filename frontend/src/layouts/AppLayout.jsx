import heroBg from "../assets/Hero-Background-notecode.svg";

const AppLayout = ({ children }) => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
     {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom Purple Curved Background
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-[#6366f1] rounded-t-[100%]  scale-x-150">
      </div> */}

      
    </div>
  );
};

export default AppLayout;
