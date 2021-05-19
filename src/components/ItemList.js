import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ItemDetail from './ItemDetail';
import { fetchDataByIdIfNeeded } from '../actions/MyActions'

export default class Item extends Component {
	constructor(props) {
		super(props)
		this.state = { isEmptyState: false, itemId: 0, requestDataById: {}, similarData: {} }
	}

	handleClick(itemId) {
		const { dispatch } = this.props
		dispatch(fetchDataByIdIfNeeded(itemId, 'detailData')).then((returnedValue) => {
			this.setState(prevState => ({
				isEmptyState: !prevState.isEmptyState,
				itemId: itemId,
				requestDataById: returnedValue
			}));
		});
	}


	render() {
		return (
			<div className="item-component">
				{!this.state.isEmptyState && (
					<div className="item-list-container">
						<div className="form-item-group-title">
							<span>LISTING</span>
						</div>
						<div className="form-item-group">
							{this.props.posts.map((post, i) =>
								<div key={i} className={(i + 1) % 3 === 0 ? "form-item form-item-thr" : "form-item"} onClick={() => this.handleClick(post.id)} >
									<div className="item-img-thumb">
										<object data={post.attributes.links.image}>
											<img src="/images/ImageNotFound.png" alt={post.attributes.title} />
										</object>
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
				)}
				{this.state.isEmptyState && (
					<ItemDetail itemId={this.state.itemId} requestDataById={this.state.requestDataById} dispatch={this.props.dispatch} />
				)}
			</div>
		)
	}
}

Item.propTypes = {
	dispatch: PropTypes.func.isRequired
}
