import React from 'react';
import { MdInput, MdVideoLibrary } from 'react-icons/md';
import Plyr from 'react-plyr';
import '../Plyr/plyr.css';
import './style.css';


export default function Video() {
    return(
        <div className="video">
            <header>
              <div className="title">
                <strong>Lidando com elementos</strong>
                <span>Manipulando a DOM</span>
              </div>

              <div className="options">
                <div className="hide-nav">
                  <MdInput size={20} />
                  <p>Esconder navegação</p>
                </div>
                <div className="change-player">
                  <p>Plyr</p>
                  <MdVideoLibrary size={20} />
                  <ul>
                    <li>Plyr</li>
                    <li>Vimeo</li>
                  </ul>
                </div>
              </div>

            </header>

            <div>
              
            <Plyr
              type="vimeo" // or "youtube"
              videoId="289103226"
            />

              {/*}
              <div className="vimeo-video">
                <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                  <iframe src="https://player.vimeo.com/video/76995404?color=ffffff" 
                  style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}} 
                  frameborder="0" 
                  allow="autoplay; fullscreen" 
                  allowfullscreen></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>
              {*/}

            </div>

        </div>
    )
}