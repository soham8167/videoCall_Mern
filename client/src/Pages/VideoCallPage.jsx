import React from 'react'
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { APP_ID,SERVER_SECRECT } from '../Constant'

const VideoCallPage = () => {
    const {roomID} = useParams()

    //creation of Random ID
    function randomID(len) {
        let result = '';
        if (result) return result;
        var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
          maxPos = chars.length,
          i;
        len = len || 5;
        for (i = 0; i < len; i++) {
          result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
      }


    const myMeeting = async (element)=>{
            const appId = APP_ID ;
            const serverSecrect = SERVER_SECRECT;
            const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecrect, roomID,  randomID(5), "Enter Your Name.....");
            // Create instance object from Kit Token.
            const zp = ZegoUIKitPrebuilt.create(kitToken);
             // start the call
            zp.joinRoom({
                container: element,
                sharedLinks: [
                  {
                    name: 'Personal link',
                    url:
                     window.location.protocol + '//' + 
                     window.location.host + window.location.pathname +
                      '?roomId=' +
                      roomID,
                  },
                ],
                scenario: {
                 mode: ZegoUIKitPrebuilt.VideoConference,
                },
           });
    }
  return (
    <div>
        <div className="myCallContainer" ref={myMeeting} style={{ width: '100vw', height: '100vh' }} />
    </div>
  )
}

export default VideoCallPage