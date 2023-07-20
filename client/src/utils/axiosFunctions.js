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
