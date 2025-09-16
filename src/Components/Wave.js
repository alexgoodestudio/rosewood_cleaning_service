function WaveBorder() {
  return (
    <div className=" bg-indigo-100  text-sky-800">
      <div className=" h-64 relative flex items-center justify-center">
      <h1 className="text-2xl">Let us handle the cleaning!</h1>
        <svg 
          className="absolute bottom-0 left-0 w-full h-16" 
          viewBox="0 0 1200 64" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,32 Q300,0 600,32 Q900,64 1200,32 L1200,64 L0,64 Z" 
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}


export default WaveBorder;