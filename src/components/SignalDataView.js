/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import Info from './Info';

const SignalDataView = ({ signalData, locationName }) => {
  const CoverageIndicator = styled.div`
    border-radius: 50%;
    height: 1.2rem;
    margin-right: 0.5rem;
    width: 1.2rem;
  `;

  const getRssi = data => {
    const value = data?.measured_rssi || data?.estimated_rssi;
    return value ? `${value.toFixed(2)} dBm` : '--';
  };

  const getSnr = data => {
    const value = data?.measured_snr || data?.estimated_snr;
    return value ? `${value.toFixed(2)} dB` : '--';
  };

  return (
    <Info>
      <Info.Box title={'Distance to Hotspot'}>
        <Info.Body>
          {signalData?.distance_from_nearest_uplink
            ? `${signalData?.distance_from_nearest_uplink.toFixed(2)} mi`
            : '--'}
        </Info.Body>
      </Info.Box>
      <Info.Box title={'Location'}>
        <Info.Body fontSize={'1em'}>{locationName}</Info.Body>
      </Info.Box>
      <Info.Box title={`RSSI/SNR`}>
        <Info.Body fontSize={'1.2em'}>{getRssi(signalData)}</Info.Body>
        <Info.Body fontSize={'1.2em'}>{getSnr(signalData)}</Info.Body>
      </Info.Box>
      <Info.Box title={'Status'}>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <CoverageIndicator className={signalData?.covered ? 'accent-green' : 'danger-red'} />
          <Info.Body>{signalData?.covered ? 'Covered' : 'No Coverage'}</Info.Body>
        </div>
      </Info.Box>
    </Info>
  );
};

export default SignalDataView;
