import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IDevice, defaultValue } from 'app/shared/model/devices/device.model';

export const ACTION_TYPES = {
  FETCH_DEVICE_LIST: 'device/FETCH_DEVICE_LIST',
  FETCH_DEVICE: 'device/FETCH_DEVICE',
  RESET: 'device/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IDevice>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type DeviceState = Readonly<typeof initialState>;

// Reducer

export default (state: DeviceState = initialState, action): DeviceState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_DEVICE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_DEVICE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.FETCH_DEVICE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_DEVICE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };

    case SUCCESS(ACTION_TYPES.FETCH_DEVICE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_DEVICE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };

    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/emm/devices';

export const getEntities: ICrudGetAllAction<IDevice> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_DEVICE_LIST,
  payload: axios.get<IDevice>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IDevice> = name => {
  const requestUrl = `${apiUrl}/${name}`;
  return {
    type: ACTION_TYPES.FETCH_DEVICE,
    payload: axios.get<IDevice>(requestUrl),
  };
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
