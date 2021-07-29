import { fromJS } from 'immutable';

export default function accessImmutableObject(object, arrayPath) {
  return fromJS(object).getIn(arrayPath, undefined);
}
