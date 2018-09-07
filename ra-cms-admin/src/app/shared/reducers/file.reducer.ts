import {Article} from '../models/article';

export const fileActions = {
  GET_REQUEST: 'file/GET_REQUEST',
  GET_SUCCESS: 'file/GET_SUCCESS',
  GET_ERROR: 'file/GET_ERROR',
};

export function fileReducer(state: Article = null, action: any) {
  switch (action.type) {
    case fileActions.GET_SUCCESS:
      return action.payload.data;
    case fileActions.GET_ERROR:
      return null;
    default:
      return state;
  }
}
