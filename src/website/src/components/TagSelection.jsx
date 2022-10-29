import React, { Component } from React;

export default class TagSelection extends Component {
    constructor() {
        super();
        this.state = {
            allTags : [],
            selectedTags : []
        };
    }

    async getTags() {
        const rawResponse = await fetch('/tags');
        this.setState({
            tags : await rawResponse.json(),
            selectedTags : []
        });
    }

    componentDidMount() {
        this.getTags();
    }

    render() {
        const allTagsDisplay = this.state.allTags.map((tag) =>{
            return (
                <li className="tag" key={tag}>{tag}</li>
            );
        });
        const selectedTagsDisplay = this.state.selectedTags.map((tag) =>{
            return (
                <li className="tag" key={tag}>{tag}</li>
            );
        });
        return (
            <div className="tag-selection container">
                <div className="tag-group">
                    <ul>
                        {allTagsDisplay}
                    </ul>
                </div>
                <div className="tag-group">
                    <ul>
                        {selectedTagsDisplay}
                    </ul>
                </div>
            </div>
        )
    }
}