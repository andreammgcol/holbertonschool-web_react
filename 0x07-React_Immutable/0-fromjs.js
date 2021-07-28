import inmutable from 'immutable';

const { fromJS } = require('immutable');

const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;
