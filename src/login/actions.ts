import * as actionNames from './actionNames'
import { createAction } from '../types';

const {
  ADD_USERIFNOTEXISTS
} = actionNames

export const addUserIfNotExists = (sub: string) => createAction(ADD_USERIFNOTEXISTS, {sub})

export interface LoginActions {
  addUserIfNotExists(sub: string) : any
}