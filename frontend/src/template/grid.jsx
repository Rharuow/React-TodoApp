import React, { Component } from 'react'

export default class Grid extends Component {
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(" ") : []

        let classes = ''

        return classes = `  ${cols[0] ? 'col-xs-' + cols[0] : '' } ${cols[1] ? 'col-sm-' + cols[1] : '' } ${cols[2] ? 'col-md-' + cols[2] : '' } ${cols[3]  ? 'col-lg-' + cols[3] : '' }`

    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return(
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}