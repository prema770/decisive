'use strict';

var React    = require('react');
var Quadrant = require('./quadrant');

var ITEMS = [
    {
        task      : 'Create React app version of static HTML',
        completed : true
    },
    {
        task      : 'Wire up components',
        completed : false
    },
    {
        task      : 'Implement design feedback',
        completed : false
    },
    {
        task      : 'Polish design',
        completed : false
    },
    {
        task      : 'Implement single-column layout',
        completed : false
    }
];

module.exports = React.createClass({
    displayName : 'Grid',

    render : function()
    {
        return (
            <div className='grid'>
                <Quadrant
                    className = 'grid__quadrant--do'
                    hint      = 'Do these things now.'
                    items     = {ITEMS}
                />
                <Quadrant
                    className = 'grid__quadrant--plan'
                    hint      = 'Plan a time to do these later.'
                    items     = {ITEMS}
                />
                <Quadrant
                    className = 'grid__quadrant--delegate'
                    hint      = 'Is someone else available to do these?'
                    items     = {ITEMS}
                />
                <Quadrant
                    className = 'grid__quadrant--later'
                    hint      = 'Save these items for your free time.'
                    items     = {ITEMS}
                />
            </div>
        );
    }
});
