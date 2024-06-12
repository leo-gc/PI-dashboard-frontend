export type getLevelFromWatertankResponse = {
  fields: {
    data_boardVoltage: number;
    data_distance: number;
    fCnt: number;
    rxInfo_altitude_0: number;
    rxInfo_altitude_1: number;
    rxInfo_latitude_0: number;
    rxInfo_latitude_1: number;
    rxInfo_loRaSNR_0: number;
    rxInfo_loRaSNR_1: number;
    rxInfo_longitude_0: number;
    rxInfo_longitude_1: number;
    rxInfo_rssi_0: number;
    rxInfo_rssi_1: number;
    txInfo_dataRate_spreadFactor: number;
    txInfo_frequency: number;
  };
  name: string;
  tags: {
    applicationID: string;
    applicationName: string;
    data_boardVoltage: number;
    data_distance: number;
    devEUI: string;
    fPort: string;
    host: string;
    nodeName: string;
    rxInfo_mac_0: string;
    rxInfo_mac_1: string;
    rxInfo_name_0: string;
    rxInfo_name_1: string;
    txInfo_adr: string;
    txInfo_codeRate: string;
    txInfo_dataRate_bandwidth: string;
    txInfo_dataRate_modulation: string;
  };
  timestamp: number;
}

export type getLastLevelFromWatertankResponse = {
  data_distance: number,
  data_percentage: number,
  i: number,
  name: string,
  nodeName: string,
}