import { useEffect, useState } from 'react';

const W3CWebSocket = require('websocket').w3cwebsocket;
const client = new W3CWebSocket('ws://localhost:55455');

const WebSocket = () => {
    const [latency, setLatency] = useState(null)
    useEffect(()=>{
        client.onopen = function() {
            console.log('WebSocket Client Connected');
        };
        client.onmessage = function(e) {
            if (typeof e.data === 'string') {
                setLatency(e.data / Date.now())
            }
        };
    },[])
    
    return(<p>Packet latency is {latency}</p>)
}
export default WebSocket;