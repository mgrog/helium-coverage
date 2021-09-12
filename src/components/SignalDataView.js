/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import Info from './Info';

const SignalDataView = ({ signalData, locationName }) => {
  const CoverageIndicator = styled.div`
    border-radius: 50%;
    height: 1.2rem;
    margin-right: 0.5rem;
    width: 1.2rem;
  `;

  const Detail = styled.div`
    font-size: 0.85em;
    color: #afafd0;
  `;

  const [isEstimated, setIsEstimated] = useState(false);

  useEffect(() => {
    setIsEstimated(signalData.estimated_rssi);
  }, [signalData]);

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
        <Info.Body fontSize={'1.1em'}>
          {getRssi(signalData)}
          {isEstimated ? '*' : ''}
        </Info.Body>
        <Info.Body fontSize={'1.1em'}>
          {getSnr(signalData)}
          {isEstimated ? '*' : ''}
        </Info.Body>
        {isEstimated ? <Info.SubTitle>(*) estimated</Info.SubTitle> : null}
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
