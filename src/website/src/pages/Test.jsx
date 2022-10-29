import React, {Component} from 'react';

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            activities : []
        }
    }
    componentDidMount = () => {
        fetch('/questionnaire').then((res) => 
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
        const displayCourses = (arr) => {
            let out = "";
            for (const course of arr.values()) {
                out += course;
            }
            return out;
        }
        const DisplayData = this.state.activities.map(
                (pair)=>{
                    return(
                        <tr key={pair['activity']['id']}>
                            <td>{pair['rating']}</td>
                            <td>{pair['activity']['name']}</td>
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
                        <th>Tag Overlap</th>
                        <th>Activity</th>
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
