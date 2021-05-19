import React, { Component } from 'react'
import SimilarItems from '../components/SimilarItems';
import { fetchSimilarDataByIdIfNeeded } from '../actions/MyActions'
import parse from 'html-react-parser';
export default class ItemDetail extends Component {
    constructor(props) {
        super(props)
        this.state = { similarData: [] }
    }

    componentDidMount() {
        const { dispatch, itemId } = this.props;
        dispatch(fetchSimilarDataByIdIfNeeded(itemId, 'similarData')).then((returnedValue) => {
            this.setState(prevState => ({
                similarData: returnedValue.data
            }));
        });
    }

    render() {
        const { itemId, requestDataById } = this.props        
        return (
            <div className="item-detail-container">
                <div className="bread-cumb">
                    <span>Home > Electronics > Games & Console ><a href="##"> {requestDataById.data.attributes.title} </a></span>
                </div>
                <div className="item-detail">
                    <div className="item-title">
                        <span>
                            {requestDataById.data.attributes.title}</span>
                    </div>
                    <div className="item-detail-row">
                        <div className="item-detail-left">
                            <div className="item-img">
                               <object data="/images/ImageNotFound_large.png">
                                    <img src="/images/ImageNotFound_large.png" alt={requestDataById.data.attributes.title} />
                                </object>
                                {/* <object data={"https://picsum.photos/140/78/?image=" + itemId} type="image/png">
                                    <img src="/images/ImageNotFound_large.png" alt={requestDataById.data.attributes.title} />
                                </object> */}
                            </div>
                        </div>
                        <div className="item-detail-right">
                            <div className="detail-price">
                                <div className="price-and-contact-info">
                                    <div className="wish-share">
                                        <div className="wish-col">
                                            <div className="icon wish">
                                                Wishlist
                                            </div>
                                        </div>
                                        <div className="share-col">
                                            <div className="icon share">
                                                <i className="fas fa-share-alt"></i>
                                                <span>
                                                    Share
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="price-info">
                                        <div className="price-text">
                                            <span>Price</span>
                                        </div>
                                        <div className="price-value">
                                            <span>{requestDataById.data.attributes.price}</span>
                                        </div>
                                    </div>
                                    <div className="item-condition-info">
                                        <div className="text">
                                            <span>Item condition</span>
                                        </div>
                                        <div className="value">
                                            <span>{requestDataById.data.attributes.condition}</span>
                                        </div>
                                    </div>
                                    <div className="item-location-info">
                                        <div className="text">
                                            <span>Item location</span>
                                        </div>
                                        <div className="value">
                                            <span>{requestDataById.data.attributes.location}</span>
                                        </div>
                                    </div>
                                    <div className="seller-info">
                                        <div className="text">
                                            <span>Seller info</span>
                                        </div>
                                        <div className="seller-detail">
                                            <div className="seller-detail-row">
                                                <div className="seller-detail-left">
                                                    <img src="/images/seller-avatar.png" alt="seller" />
                                                </div>
                                                <div className="seller-detail-right">
                                                    <div className="seller-detail-info">
                                                        <div className="seller-name value">
                                                            <span>{requestDataById.data.attributes.seller_name}</span>
                                                        </div>
                                                        <div className="seller-type text">
                                                            <span>{requestDataById.data.attributes.seller_type}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-border">
                                </div>
                                <div className="contact-info">
                                    <div className="contact-desc text">
                                        <span>
                                            Interested with the ad? Contact the seller</span>
                                    </div>
                                    <div className="contact-tel red-round-border contact-text">
                                        <div className="icon telephone">
                                            <i className="fas fa-phone fa-rotate-180" data-fa-transform="rotate-180"></i>
                                            <span>
                                                {requestDataById.data.attributes.phone}
                                            </span>
                                        </div>

                                    </div>
                                    <div className="contact-Email  red-round-border contact-text">
                                        <div className="icon email">
                                            <i className="fas fa-envelope"></i>
                                            <span>
                                                Email</span>
                                        </div>

                                    </div>
                                    <div className="contact-chat  red-round-border contact-text">
                                        <div className="icon chat">
                                            <i className="fas fa-comments"></i>
                                            <span>
                                                Chat</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-desc-sec">
                        <div className="item-desc-sec-row">
                            <div className="item-desc-left">
                                <div className="item-desc-title">
                                    <span>DESCRIPTION</span>
                                </div>
                                <div className="red-border">

                                </div>
                            </div>
                            <div className="item-desc-right">
                                <div className="item-report-ad">
                                    <i className="fas fa-flag"></i>
                                    <span>Report Ad</span>
                                </div>

                            </div>
                        </div>
                        <div className="item-desc-det">
                            <p>
                                {parse(requestDataById.data.attributes.description.replace(/\\n/g, '<br/>'))}
                            </p>
                        </div>
                        <div className="empty-border" />
                    </div>

                    <div className="similar-item-section">
                        <div className="similar-item-title">
                            <span>
                                SIMILAR ITEMS</span>
                        </div>
                        <div className="similar-item-list">
                            {this.state.similarData.length > 0 && (
                                <SimilarItems itemId={itemId} similarData={this.state.similarData} />
                            )}

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

