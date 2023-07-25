import axiosClient from '../axiosClient';

export const postMessage = async (props) => {
  const { name, email, subject, message } = props;
  console.log(props, name);
  try {
    const bla = await axiosClient.post('/message', props);
    console.log(bla);
    return true;
  } catch (error) {
    console.log('ERROR OCCURED AND CATCHED');
    return false;
  }
};

export const getNextEvents = async (amount) => {
  const neddedEvents = { amount };
  console.log(neddedEvents);
  try {
    const events = await axiosClient.get(`/events/next/${amount}`);
    console.log('response got from getNextEvents');
    //console.log(events);
    return events;
  } catch (error) {
    console.log(error.message);
  }
};
