import React from 'react';
import activities from "./activities.json"
import './Test.css'
function Test() {
        const DisplayData=activities.map(
            (info)=>{
                return(
                    <tr>
                        <td>{info['ID']}</td>
                        <td>{info['Nombre de la organización']}</td>
                        <td>{info['Clasificación']}</td>
                        <td>{info['Correo electrónico']}</td>
                        <td>{info['Decanato al que se dirige']}</td>
                        <td>{info['Correo Consejer@']}</td>
                        <td>{info['Correo electrónico President@']}</td>
                        <td>{info['Coursing Year Requirement']}</td>
                    </tr>
                )
            }
        )
    return (
        
        //JSON.stringify(data)
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nombre de la organización</th>
                    <th>Clasificacion</th>
                    <th>Correo electrónico</th>
                    <th>Decanato al que se dirige</th>
                    <th>Correo Consejer@</th>
                    <th>Correo electrónico President@</th>
                    <th>Coursing Year Requirement</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    );
    }
export default Test;
