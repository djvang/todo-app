import React from 'react';

import $ from 'jquery'
import 'air-datepicker/dist/css/datepicker.css'

window.jQuery = window.$ = $;
require('air-datepicker/dist/js/datepicker.js');

export default class Datepicker extends React.Component {

  componentDidMount() {

    this.$datepicker = $(this.datepicker);

    this.$datepicker.datepicker({
      inline: true
    });

  }

  render(props) {
    return <div className="datepicker-here" ref={el => this.datepicker = el}></div>
  }
}