import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';

class Search extends React.Component {

  render() {
    return (<div styleName="search">
              <div styleName="search-icon"></div>
              <input styleName="search-text"  type="text" />
            </div>)
  }
}
export default CSSModules(Search, styles);
