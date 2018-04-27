import React, { Component } from 'react';
import PubNubReact from 'pubnub-react';
 
export default class extends Component {
    constructor(props) {
        super(props);
        this.pubnub = new PubNubReact({
            publishKey: 'pub-c-db8ffe75-7878-4859-b6ef-d111c6719b3b',
            subscribeKey: 'sub-c-c8d2909e-3f07-11e8-91e7-8ad1b2d46395'
        });
        this.pubnub.init(this);
    }
 
    componentWillMount() {
        this.pubnub.subscribe({
            channels: ['channel1'],
            withPresence: true
        });
 
        this.pubnub.getMessage('channel1', (msg) => {
            console.log(msg);
        });
 
        this.pubnub.getStatus((st) => {
            this.pubnub.publish({
                message: 'You are now connected to PubNub. Your data will be displayed below',
                channel: 'channel1'
            });
        });
    }
 
    componentWillUnmount() {
        this.pubnub.unsubscribe({
            channels: ['channel1']
        });
    }
 
    render() {
        const messages = this.pubnub.getMessage('channel1');
        return (
            <div>
                <ul>
                    {messages.map((m, index) => <li key={'message' + index}>{m.message}</li>)}
                </ul>
            </div>
        );
    }
}

