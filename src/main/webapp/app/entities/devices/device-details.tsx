import { Link, RouteComponentProps } from 'react-router-dom';
import React, { useEffect } from 'react';
import { IRootState } from 'app/shared/reducers';
import { getEntity } from './device.reducer';
import { connect } from 'react-redux';
import { CCard, CCardBody, CCardHeader, CCol, CRow,CCardGroup,CWidgetProgressIcon,CProgress,CWidgetSimple } from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate } from 'react-jhipster';
import { Button, Row, Col } from 'reactstrap';
import CIcon from '@coreui/icons-react';
import { IDevice } from 'app/shared/model/devices/device.model';
import { IMemoryEvent } from 'app/shared/model/devices/memory-event.model';
import { IPowerManagementEvent } from 'app/shared/model/devices/power-management-event.model';

export interface IDeviceDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ name: string }> {}

export const DeviceDetail = (props: IDeviceDetailProps) => {

  useEffect(() => {
    props.getEntity(props.match.params.name);
  }, []);

  const { deviceEntity, loading } = props;

  function getLastExternalStorageMeasuredEvent(device: IDevice) : IMemoryEvent{
    let latestEvent, index = device.memoryEvents.length - 1;
    for ( ; index >= 0; index--) {
      if (device.memoryEvents[index]["eventType"] === "EXTERNAL_STORAGE_MEASURED") {
        latestEvent = device.memoryEvents[index];
        break;
      }
    }

    return latestEvent
  }

  function getLastExternalStorageDetectedEvent(device: IDevice) : IMemoryEvent{
    let latestEvent, index = device.memoryEvents.length - 1;
    for ( ; index >= 0; index--) {
      if (device.memoryEvents[index]["eventType"] === "EXTERNAL_STORAGE_DETECTED") {
        latestEvent = device.memoryEvents[index];
        break;
      }
    }

    return latestEvent
  }

  function getBatteryColor(batteryLevel: number) : string {
     if (batteryLevel > 50) {
       return "gradient-success";
     }else if (batteryLevel <50 && batteryLevel >=15){
       return "gradient-warning"
     }else if (batteryLevel < 15){
       return "gradient-danger"
     }else{
       return "gradient-danger"
     }
  }

  function getBatteryIcon(batteryLevel: number) : string{
    if (batteryLevel > 60) {
      return "cil-battery-full";
    }else if (batteryLevel >30 && batteryLevel <=60){
      return "cil-battery3"
    }else if (batteryLevel >5 && batteryLevel <=30){
      return "cil-battery-alert"
    }else if (batteryLevel >=0 && batteryLevel <=5){
      return "cil-battery-empty"
    }else if (batteryLevel < 0){
      return "cil-battery-slash"
    }else{
      return "cil-battery-slash"
    }
  }

  function getLastBatteryLevelCollectedEvent(device: IDevice) : IPowerManagementEvent{
    if (device.powerManagementEvents) {
      let latestEvent, index = device.powerManagementEvents.length - 1;
      for (; index >= 0; index--) {
        if (device.powerManagementEvents[index].eventType === "BATTERY_LEVEL_COLLECTED") {
          latestEvent = device.powerManagementEvents[index];
          break;
        }
      }
      return latestEvent
    }else{
      return null;
    }
  }

  function getRemainingStorage(device: IDevice): number{
    return device.memoryEvents && device.memoryEvents.length > 0 ? parseInt(getLastExternalStorageMeasuredEvent(device).byteCount, 10) / (1024*1024*1024) : 0;
  }

  function getTotalStorage(device: IDevice): number{
    return device.memoryEvents && device.memoryEvents.length > 0 ? parseInt(getLastExternalStorageDetectedEvent(device).byteCount, 10) / (1024*1024*1024) : 0;
  }

  function calculateStorageRemainingPercentage(device: IDevice): number{
    return getRemainingStorage(device) / getTotalStorage(device) * 100;
  }

  function getStorageColor(remainingPercentage: number) : string {
    if (remainingPercentage > 50) {
      return "gradient-success";
    }else if (remainingPercentage <50 && remainingPercentage >=15){
      return "gradient-warning"
    }else if (remainingPercentage < 15){
      return "gradient-danger"
    }else{
      return "gradient-danger"
    }
  }

  return(
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Device Details
            <div className="card-header-actions">
              { loading &&
              <div className="sk-wave">
                <div className="sk-wave-rect"></div>
                <div className="sk-wave-rect"></div>
                <div className="sk-wave-rect"></div>
                <div className="sk-wave-rect"></div>
                <div className="sk-wave-rect"></div>
              </div>
              }
              {!loading &&
              "ID: "+/[^/]*$/.exec(deviceEntity.name)[0]
              }
            </div>
          </CCardHeader>
          <CCardGroup className="mb-4">
            <CWidgetSimple
              color="gradient-success"
              text="Management"
            >
              <CIcon name="cil-settings" height="36"/>
              <div className="small text-muted">
                <br/>
                <span>{deviceEntity.managementMode}</span>
              </div>
            </CWidgetSimple>
            <CWidgetSimple
              color="gradient-success"
              text="Encryption"
            >
              <CIcon name="cil-check-circle" height="36"/>
              <div className="small text-muted">
                <br/>
                <span>{deviceEntity.deviceSettings && deviceEntity.deviceSettings.encryptionStatus}</span>
              </div>
            </CWidgetSimple>
            <CWidgetSimple
              color="gradient-success"
              text="Security"
            >
              <CIcon name="cil-shield-alt" height="36"/>
              <div className="small text-muted">
                <br/>
                <span>{deviceEntity && deviceEntity.securityPosture && deviceEntity.securityPosture.devicePosture}</span>
              </div>

            </CWidgetSimple>
            <CWidgetProgressIcon
              header={getLastBatteryLevelCollectedEvent(deviceEntity) ? getLastBatteryLevelCollectedEvent(deviceEntity).batteryLevel+"%" : "No power event reported"}
              text="Battery Level"
              progressSlot={
                <CProgress color={getBatteryColor(getLastBatteryLevelCollectedEvent(deviceEntity) ? getLastBatteryLevelCollectedEvent(deviceEntity).batteryLevel : -1)} size="xs" value={getLastBatteryLevelCollectedEvent(deviceEntity) ? getLastBatteryLevelCollectedEvent(deviceEntity).batteryLevel : 0} animated className="my-3"
                />}
            >
              <CIcon name={getBatteryIcon(getLastBatteryLevelCollectedEvent(deviceEntity) ? getLastBatteryLevelCollectedEvent(deviceEntity).batteryLevel : -1)} height="36"/>
            </CWidgetProgressIcon>
            <CWidgetProgressIcon
              header={getRemainingStorage(deviceEntity).toFixed(2)+" GB Available"}
              text={"Storage ( Total: "+getTotalStorage(deviceEntity).toFixed(2)+" GB)"}
              progressSlot={
                <CProgress color={getStorageColor(calculateStorageRemainingPercentage(deviceEntity))} size="xs" value={calculateStorageRemainingPercentage(deviceEntity)} animated className="my-3"
                />}
            >
              <CIcon name="cil-storage" height="36"/>
            </CWidgetProgressIcon>
          </CCardGroup>

          <CCardBody>
            <CCol>
              <dl className="jh-entity-details">
                <dt>
              <span id="name">
                KeyguardDisabled
              </span>
                </dt>
                <dd>Device Information</dd>
              </dl>
              <Button tag={Link} to="/devices" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />{' '}
                <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
              </Button>
              &nbsp;
              <Button tag={Link} to={`/devices/${/[^/]*$/.exec(deviceEntity.name)[0]}/edit`} replace color="primary">
                <FontAwesomeIcon icon="pencil-alt" />{' '}
                <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
              </Button>
            </CCol>



            <CCol>
              <dl className="jh-entity-details">
                <dt>
              <span id="name">
                KeyguardDisabled
              </span>
                </dt>
                <dd>Device Information</dd>
              </dl>
              <Button tag={Link} to="/devices" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />{' '}
                <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
              </Button>
              &nbsp;
              <Button tag={Link} to={`/devices/${/[^/]*$/.exec(deviceEntity.name)[0]}/edit`} replace color="primary">
                <FontAwesomeIcon icon="pencil-alt" />{' '}
                <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
              </Button>
            </CCol>



          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );


}


const mapStateToProps = ({ device }: IRootState) => ({
  deviceEntity: device.entity,
  loading: device.loading,

});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetail);
