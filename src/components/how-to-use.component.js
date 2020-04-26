import React, { Component } from 'react';


export default class HowToUse extends Component{
    render(){
        return(
            <div className="container">
                <hr/>
                <ul className="list-group">
                    <li className="list-group-item">First Create a punishee. This is the person you want to punish</li>
                    <li className="list-group-item">Second Create punishment. Here create the description of the punishment and the duration...</li>
                    <li className="list-group-item">Then you can edit and delete punishment if the punishee has finished the punishment</li>
                </ul>
                <hr/>
            </div>
        )
    }
}