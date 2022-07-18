import axios from 'axios';

export const getBlocksCall = ( page ) => {
  
  var endpoint = `${process.env.REACT_APP_API_BLOCKS}`;
  
  if(page > 1) endpoint = endpoint.concat(`?page=${page}`);
  
  return async (dispatch) => {
    dispatch({
      type: 'BLOCKS_LOADING'
    });
    return axios({
      method: 'GET',
      url: endpoint
    })
      .then((blocksObj) => {
        
        dispatch({
          type: 'BLOCKS_SUCCESS',
          blocks: {
            ...blocksObj.data
          }
        });
      })
      .catch((err) => {
        
        dispatch({
          type: 'BLOCKS_ERROR',
          err,
          errorCode: 401
        });
      });
  };
};

