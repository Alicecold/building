'use strict';

const e = React.createElement;

class contactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>Something new might happen here. <a href="https://github.com/Alicecold">Maybe even soon.</a></p>;
  }
}

const domContainer = document.querySelector('#content');
ReactDOM.render(e(contactPage), domContainer);