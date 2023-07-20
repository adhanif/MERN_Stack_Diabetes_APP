import axiosClient from '../axiosClient';

export const postMessage = async (props) => {
  const { name, email, subject, message } = props;
  console.log(props, name);
  try {
  } catch (error) {}
  axiosClient.post('/message', props);
};
