/* 
TODO:
-get password confirmation
*/

import {ActionTypes} from './constants';

const defaultState = {
      users_list : [],
      customer_id : '',
      username : '',
      password : '',
      password_confirm : '',
      JWT_REFRESH : '',
      JWT_ACCESS : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzMjIzNDc4LCJqdGkiOiJkYTBkZDAyNjJmNTg0NTdmOTFhMWY1Yjg0YWE1ZjI5NCIsInVzZXJfaWQiOiI4YmY3NGJmMC0wODRmLTQyMDUtYTg5Mi1kOGU3MWRkOTlkMmQifQ.j1z4mCjDSZwtFnN2lzjPXb3FCErkLumn_L6X4D5ebm8',
      name: '',
      new_password: '',
      contact_number: '',
      address: '',
      role: '',
      valid_id1: null,
      business_permit: null,
      medical_license: null,
      medical_record: null,
      is_verified: false,
      is_rejected: false,
      is_available: false,
}


export default function userReducer(state = defaultState, action) {
      switch(action.type){
            case ActionTypes.SET_USERS_LIST:
                  return {...state,
                        users_list:action.payload.users_list
                  }
            case ActionTypes.SET_USER:
                  return {...state, 
                        username:action.payload.username,
                        password:action.payload.password,
                        address:action.payload.address,
                        contact_number:action.payload.contact_number,
                        role:action.payload.role,
                        valid_id1:action.payload.valid_id1
                  }
            case ActionTypes.SET_CUSTOMER:
                  return {...state,
                        medical_record:action.payload.medical_record,
                        is_verified:action.payload.is_verified,
                        is_rejected:action.payload.is_rejected
                  }
            case ActionTypes.SET_WORKER:
                  return {...state,
                        medical_license:action.payload.medical_license,
                        is_available:action.payload.is_available,
                  }
            case ActionTypes.SET_OWNER:
                  return {...state,
                        business_permit:action.payload.business_permit,
                  }
            case ActionTypes.SET_USER_ID:
                  return {...state, customer_id:action.payload}
            case ActionTypes.SET_USERNAME:
                  return {...state, username:action.payload}
            case ActionTypes.SET_PASSWORD:
                  return {...state, password:action.payload}
            case ActionTypes.SET_PASSWORD_CONFIRM:
                  return {...state, password_confirm:action.payload}
            case ActionTypes.SET_JWT_REFRESH:
                  return {...state, JWT_REFRESH :action.payload}
            case ActionTypes.SET_JWT_ACCESS:
                  return {...state, JWT_ACCESS :action.payload}
            case ActionTypes.SET_NAME:
                  return {...state, name:action.payload}
            case ActionTypes.SET_NEW_PASSWORD:
                  return {...state, new_password:action.payload}
            case ActionTypes.SET_CONTACT_NUMBER:
                  return {...state, contact_number:action.payload}
            case ActionTypes.SET_ADDRESS:
                  return {...state, address:action.payload}
            case ActionTypes.SET_ROLE:
                  return {...state, role:action.payload}
            case ActionTypes.SET_VALID_ID:
                  return {...state, valid_id1:action.payload}
            case ActionTypes.SET_BUSINESS_PERMIT:
                  return {...state, business_permit:action.payload}
            case ActionTypes.SET_MEDICAL_LICENSE:
                  return {...state, medical_license:action.payload}
            default:
                  return state;
      }
}
