import React, { Component } from "react";

export default class TagSelection extends Component {
    constructor() {
        super();
        this.state = {
            allTags : [],
            selectedTags : []
        };

        this.toggleTag = this.toggleTag.bind(this);
    }

    async getTags() {
        const rawResponse = await fetch('/tags');
        this.setState({
            allTags : await rawResponse.json(),
            selectedTags : []
        });
    }

    toggleTag(e) {
        const name = e.target.innerHTML;
        let selectedTags = this.state.selectedTags;

        if (selectedTags.find((element) => element === name)) {
            selectedTags = selectedTags.filter((element) => element !== name)
        } else {
            selectedTags.unshift(name);
        }

        this.setState({
            selectedTags: selectedTags
        });
    }

    componentDidMount() {
        this.getTags();
    }

    render() {
        const allTagsDisplay = this.state.allTags.map((tag) =>{
            return (
                <li className="tag all-tags"
                onClick={this.toggleTag}
                key={tag}>{tag}</li>
            );
        });
        const selectedTagsDisplay = this.state.selectedTags.map((tag) =>{
            return (
                <li className="tag active-tag" 
                onClick={this.toggleTag}
                key={tag}>{tag}</li>
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