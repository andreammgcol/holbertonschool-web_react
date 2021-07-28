import {fromJS, getIn } from 'immutable';

function accessImmutableObject(object, array) {
  return getIn(fromJS(object), array);
}

export default accessImmutableObject();
