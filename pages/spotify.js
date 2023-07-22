import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'
import { useState } from "react";
// import { motion } from 'framer-motion';

export default function Home() {
  const [songList, setSongList] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      
      let reader = new FileReader();
      reader.readAsText(i);

      var list

      reader.onload = function() {
        list = JSON.parse(reader.result);
        console.log(list[0]["trackName"])
        setSongList(list);
        setCreateObjectURL(URL.createObjectURL(i));
      };
    }
  };

  const findSong = () => {
     
  }

  return (
    <div>
      <div>
        <h4>Select File</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
      </div>
    </div>
  )
}

function makeLists(songs) {
  var newSongs = {}

  for (var i = 0; i < songs.length; i++){
    const songID = songs[i]["trackName"] + "#$%$#" + songs[i]["artistName"]

    if (newSongs[songID] === null){
      newSongs[songID] = {
        "streams" : 1,
        "times" : [songs[i]["endTime"]],
        "lengths" : [songs[i]["msPlayed"]]
      }
    }
    else{
      newSongs[songID]["streams"] += 1;
      newSongs[songID]["times"].push(songs[i]["endTime"])
      newSongs[songID]["lengths"].push(songs[i]["msPlayed"])
    }
  }

  
}