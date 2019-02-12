import 'rxjs'

import * as Response from 'fitness-goal-tracker'
import * as cycleNames from './actionNames'

import { AxiosResponse } from 'axios'
import { a as Axios  } from '../axiosHelper'
import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'

const { ADD_USERIFNOTEXISTS, ADD_USERIFNOTEXISTS_FAIL, ADD_USERIFNOTEXISTS_SUCCESS } = cycleNames
export function addUserIfNotExists(action$: any) {
  return action$.pipe(
    ofType(ADD_USERIFNOTEXISTS),
    switchMap(async (action: any) => {
      try {
        var response: AxiosResponse<Response.User> = await Axios.get(`?uuid=${action.payload.userId}`)
        return {
          type: ADD_USERIFNOTEXISTS_SUCCESS,
          payload: response.data.uuid
        }
      } catch (e) {
        return {
          type: ADD_USERIFNOTEXISTS_FAIL,
          payload: e
        }
      }
    })
  )
}
