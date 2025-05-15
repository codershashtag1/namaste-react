const { useEffect, useState } = require('react');

const useOnlineStatus = () => {

  const [isOnline, setIsOnline] = useState(true);
  
  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);

  return isOnline;
}

export default useOnlineStatus;

