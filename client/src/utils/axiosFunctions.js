import axiosClient from '../axiosClient';

export const postMessage = (props) => {
  const { name, email, subject, message } = props;
  console.log(props, name);
  axiosClient.post('/message', props);
};
