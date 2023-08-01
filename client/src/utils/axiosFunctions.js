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

export const postEvent = async (data) => {
  try {
    const response = await axiosClient.post('/events', data);
    return response.data;
  } catch (error) {
    console.log('ERROR OCCURED AND CATCHED');
    return false;
  }
};
export const getNextEvents = async (amount) => {
  // console.log(amount);
  try {
    const events = await axiosClient.get(`/events/next/${amount}`);
    //console.log('response got from getNextEvents');
    //console.log(events);
    return events;
  } catch (error) {
    console.log(error.message);
  }
};

export const getBestArticles = async (amount) => {
  try {
    const neededArticles = await axiosClient.get(`/articles/best/${amount}`);
    console.log('response got from getBEstArticles');
    return neededArticles;
  } catch (error) {
    console.log(error.message);
  }
};
