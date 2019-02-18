import 'rxjs'

import * as Response from 'fitness-goal-tracker'
import * as actionNames from './actionNames'

import { mergeMap, switchMap } from 'rxjs/operators'

import { AxiosResponse } from 'axios'
import { a as Axios } from '../axiosHelper'
import { ofType } from 'redux-observable'

const { GET_CYCLES, GET_CYCLES_SUCCESS, GET_CYCLES_FAIL,
  ADD_CYCLE, ADD_CYCLE_FAIL, ADD_CYCLE_SUCCESS } = actionNames

export function getCycles(action$: any) {
  return action$.pipe(
    ofType(GET_CYCLES),
    switchMap(async (action: any) => {
      try {
        var response: AxiosResponse<Response.User> = await Axios.get(`?uuid=${action.payload.userId}`)
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

export function addCycle(action$: any) {
  return action$.pipe(
    ofType(ADD_CYCLE),
    mergeMap(async (action: any) => {
      try {
        var response: AxiosResponse<Response.User> = await Axios.post(`/cycle?uuid=${action.payload.userId}`, {
          name: action.payload.name,
          startTime: action.payload.startTime,
          endTime: action.payload.endTime
        })
        return {
          type: ADD_CYCLE_SUCCESS,
          payload: response.data.cycles
        }
      } catch (e) {
        return {
          type: ADD_CYCLE_FAIL,
          payload: e
        }
      }
    })
  )
}
