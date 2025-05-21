const { useEffect, useState } = require('react');

const useOnlineStatus = () => {

  const [isOnline, setIsOnline] = useState(true);
  
  useEffect(() => {
    window.addEventListener("Offline", () => {
      
      setIsOnline(false);
    });
  }, []);

  return isOnline;
}

export default useOnlineStatus;

