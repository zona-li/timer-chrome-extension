import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [url, setUrl] = useState();

  useEffect(() => {
    chrome.storage.sync.get('time', function (data) {
      time = JSON.stringify(data.time);
      setTime(time);
    });

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      url = tabs[0].url;
      const domain = new URL(url).hostname;
      setUrl(domain);
    });
  });

  return (
    <div>
      <header>{url}</header>
      <p>{time}</p>
    </div>
  );
}

export default App;
