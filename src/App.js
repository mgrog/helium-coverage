/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import Transition from './components/Transition';

// import fspl from './FSPL';
import darkLogo from './assets/helium-logo-dark.svg';
import WidgetContainer from './components/WidgetContainer';
import UserSelectOverlay from './components/UserSelectOverlay';
import AddressForm from './components/AddressForm';
import SignalDataView from './components/SignalDataView';
import LoadingView from './components/LoadingView';
import Button from './components/Button';
import Header from './components/Header';

/*
  
need to figure out if we need to pass equipment props

function useXProps() {
    const [ xprops, setXProps ] = useState(window.xprops);
    useEffect(() => {
        window.xprops.onProps(props => {
            setXProps({ ...props })
        });
    }, []);
    return xprops;
}
*/

function App() {
  const styles = {
    appTitle: {
      color: '#A2A4C8',
      fontSize: '1em',
      margin: '1rem',
    },

    startContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
  };

  const mapApiBase = `https://nominatim.openstreetmap.org/`;

  const [failureMsg, setFailureMsg] = useState('');
  const [view, setView] = useState('chooseGeoMethod');
  const [signalData, setSignalData] = useState({ distance: 10000, measured_rssi: 1 });
  const [locationName, setLocationName] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setFailureMsg('');
    }
  }, [loading, setFailureMsg]);

  useEffect(() => {
    if (failureMsg) {
      setView('enterAddress');
    }
  }, [failureMsg, setView]);

  const useGeoLocation = () => {
    setLoading(true);

    const success = position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(`${mapApiBase}/reverse?lat=${lat}&lon=${lon}&format=jsonv2&addressdetails=1`)
        .then(res => res.json())
        .then(async data => {
          try {
            const name = displayAddress(data);
            await loadSignalData(name, lat, lon);
          } catch (error) {
            setFailureMsg(error.message);
          } finally {
            setLoading(false);
          }
        });
    };

    const fail = error => {
      setLoading(false);
      setFailureMsg('Geolocation failed, please enter an address');
      console.error(error);
    };

    navigator.geolocation.getCurrentPosition(success, fail, { timeout: 5000 });
  };

  const lookupAddress = async query => {
    try {
      if (!query) {
        throw new Error('No address provided!');
      }
      setLoading(true);
      const data = await fetch(
        `${mapApiBase}/search?q=${encodeURIComponent(query)}&format=jsonv2&addressdetails=1`,
      ).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('There was a problem retrieving the address data');
        }
      });
      if (!data.length) {
        throw new Error('That address could not be found');
      }
      const { lat, lon } = data[0];
      const name = displayAddress(data[0]);
      await loadSignalData(name, lat, lon);
    } catch (error) {
      setFailureMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadSignalData = (locName, lat, lon) => {
    setLocationName(locName);
    return fetch(`https://mappers.helium.com/api/v1/coverage/geo/${lat},${lon}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('There was a problem retrieving the mapper data');
        }
      })
      .then(data => {
        setView('signalData');
        setSignalData(data);
      });
  };

  const resetApp = () => {
    setView('chooseGeoMethod');
    setLoading(false);
    setLocationName('');
    setFailureMsg('');
  };

  const displayAddress = ({ address }) => {
    return [address.road, address.city, address.state, address.country].filter(a => !!a).join(', ');
  };

  return (
    <div className="app">
      <div className="widget-header accent-blue-text">
        helium
        <img css={{ height: '2rem' }} src={darkLogo} alt={'Helium Icon'} />
      </div>
      <div className="center-area">
        <h1 css={styles.appTitle}>Hotspots | Network Coverage</h1>
        <WidgetContainer>
          <Header
            visible={loading || view !== 'chooseGeoMethod'}
            text={'Network Coverage In Your Area'}
            showReset={!loading && view !== 'chooseGeoMethod'}
            reset={() => resetApp()}
          />
          <UserSelectOverlay mount={view !== 'signalData' && !loading}>
            <Transition trigger={view === 'enterAddress'} unmountOnExit={true}>
              <AddressForm forward={lookupAddress} failureMsg={failureMsg} />
            </Transition>
            <Transition trigger={view === 'chooseGeoMethod'} unmountOnExit={true} timeout={0}>
              <div css={styles.startContainer}>
                <Button handleClick={useGeoLocation}>Use Your Location</Button>
                <h3>Or</h3>
                <Button handleClick={() => setView('enterAddress')}>Enter Address</Button>
              </div>
            </Transition>
          </UserSelectOverlay>
          <LoadingView loading={loading}>
            <SignalDataView signalData={signalData} locationName={locationName} />
          </LoadingView>
        </WidgetContainer>
      </div>
    </div>
  );
}

export default App;
