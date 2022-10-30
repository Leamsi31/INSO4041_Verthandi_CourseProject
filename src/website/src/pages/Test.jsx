import React, {Component} from 'react';
import "./Test.css"

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            activities : []
        }
    }
    componentDidMount = () => {
        let student = {
            id: 1
        };
        fetch('/questionnaire', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(student)
        }).then((res) => 
            res.json()
        ).then( res => {
            this.setState({
                activities : res
            });
            this.render();
        }
        )
        .catch( err => console.log(err))
    }  

    
        
    render() {
        const displayArr = (arr) => {
            if (arr.length === 0) {
                return "Any"
            }
            let out = "";
            for (const course of arr.values()) {
                out += course + ", ";
            }
            const temp = out.length;
            out = out.substring(0, temp - 2);
            return out;
        }
        const DisplayData = this.state.activities.map(
                (pair)=>{
                    return(
                        <tr key={pair['activity']['id']}>
                            <td>{pair['activity']['name']}</td>
                            <td>{pair['rating']}</td>
                            <td>{pair['activity']['requirementYear']}</td>
                            <td>{displayArr(pair['activity']['requirementCourses'])}</td>
                            <td>{displayArr(pair['activity']['tags'])}</td>
                        </tr>
                    )
                }
        )
        return (
        
            //JSON.stringify(data)
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>Activity</th>
                        <th>Tag Overlap</th>
                        <th>Requirement Year</th>
                        <th>For Students in</th>
                        <th>Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                        
                        {DisplayData}
                        
                    </tbody>
                </table>
                 
            </div>
        );
    }
}
