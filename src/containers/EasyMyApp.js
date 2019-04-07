import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchDataIfNeeded}  from '../actions/MyActions'
import '../sass/main.scss'
import ItemList from '../components/ItemList';
import Header from '../components/Header';
class EasyMyApp extends Component {

  componentDidMount() {
    const { dispatch, selectedData } = this.props
    dispatch(fetchDataIfNeeded(selectedData))
  }

  componentDidUpdate() {
    const { dispatch, selectedData } = this.props
    dispatch(fetchDataIfNeeded(selectedData))
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedData !== this.props.selectedData) {
      const { dispatch, selectedData } = nextProps
      dispatch(fetchDataIfNeeded(selectedData))
    }
  }
  
  render() {
    const { data, isFetching} = this.props
    return (
      <div className="main-container body-content">
        <Header />
        <div id="wrapper">
          <div id="main">
            <div className="inner">
              <form className="form-container" >
                
                  {isFetching && data.length === 0 &&
                    <h2 className="loading-text">Loading...</h2>
                  }
                  {!isFetching && data.length === 0 &&
                    <h2 className="empty-text">Empty.</h2>
                  }
                  {data.length > 0 &&                  
                     <ItemList posts={data} dispatch = {this.props.dispatch} />
                    
                  }                
              </form>
            </div>
          </div>
        </div>

      </div>


    )
  }
}

EasyMyApp.propTypes = {
  selectedData: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,    
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedData, dataRecived } = state
  const { isFetching, items: data } = dataRecived[selectedData] || { isFetching: true, items: [] }
  return {
    selectedData,
    data,
    isFetching    
  }
}

export default connect(mapStateToProps)(EasyMyApp)