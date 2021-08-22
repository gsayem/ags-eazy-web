import React, { Component } from 'react'


export default class SimilarItems extends Component {    
    render() {
        return (
            <div className="similar-item-component">
                <div className="similar-item-group">
                    {this.props.similarData.map((post, i) =>
                        <div key={i} className={i % 2 === 0 ? "form-item even-item" : "form-item odd-item"} >
                            <div className="item-img-thumb">
                                <img src={post.attributes.image} alt={post.attributes.title} />
                            </div>
                            <div className="item-desc">
                                <p>
                                    {post.attributes.title}
                                </p>
                            </div>
                            <div className="item-price">
                                <p>
                                    {post.attributes.price}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        )

    }
}


