import 'rxjs'

import * as cycleActions from './action-names'
import * as m from '../module'

import { AxiosResponse } from 'axios';
import { defaultAxios } from '../axiosConfig'
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators'

const { GET_CYCLES, GET_CYCLES_SUCCESS, GET_CYCLES_FAIL } = cycleActions
export function getCycles(action$: any, store: any) {
  return action$.pipe(
    ofType(GET_CYCLES),
    switchMap(async (action: any) => {
      try {
        const axiosInstance = defaultAxios()
        var response: AxiosResponse<m.namespace.User> = await axiosInstance.get(`?uuid=${action.payload.userId}`)
        return {
          type: GET_CYCLES_SUCCESS,
          payload: response.data.cycles
        }
      }
      catch (e) {
        return {
          type: GET_CYCLES_FAIL,
          payload: e
        }
      }
    }))
}
