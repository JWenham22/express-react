import React, { useState, useEffect }from 'react'

function App() {

  const [youtubeCTA, setYoutubeCTA] = useState({});
  const [homeInfo, setHomeInfo] = useState({});
  const [soccerInfo, setSoccerInfo] = useState({});

  useEffect(() => {
    const fetchData = async() => {
      try {
        const youtubeResponse = await fetch('http://localhost:8000/api/youtube');
        if (!youtubeResponse.ok){
          throw new Error(`HTTP error: Status: ${youtubeResponse.status}`);
        }
        const youtubeData = await youtubeResponse.json();
        setYoutubeCTA(youtubeData);

        const homeResponse = await fetch('http://localhost:8000/home');
        if (!homeResponse.ok){
          throw new Error(`HTTP error: Status: ${homeResponse.status}`);
        }

        const homeData = await homeResponse.json();
        setHomeInfo(homeData);

        const soccerResponse = await fetch('http://localhost:8000/soccer');
        if (!soccerResponse.ok){
          throw new Error(`HTTP error: Status: ${soccerResponse.status}`);
        }

        const soccerData = await soccerResponse.json();
        setSoccerInfo(soccerData);

      } catch (error) {
        console.error(`Error fetching data: ${error.message}`)
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <h1>{youtubeCTA.like}</h1>
      <h1>{youtubeCTA.subscribe}</h1>
      <h1>{homeInfo.soccer}</h1>
      <h1>{homeInfo.surfing}</h1>
      <h2>{soccerInfo.ManCity}</h2>
      <h2>{soccerInfo.united}</h2>
    </div>
  )
};

export default App;