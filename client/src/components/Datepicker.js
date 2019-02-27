import React from 'react';

import $ from 'jquery'
import 'air-datepicker/dist/css/datepicker.css'

window.jQuery = window.$ = $;
require('air-datepicker/dist/js/datepicker.js');

export default class Datepicker extends React.Component {

  componentDidMount() {

    this.$datepicker = $(this.datepicker);

    let { type,  ...props } = this.props;

    this.$datepicker.datepicker(props);

  }

  render() {
    return <div className="datepicker-here" ref={el => this.datepicker = el}></div>
  }
}