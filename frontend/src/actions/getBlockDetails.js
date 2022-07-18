import axios from 'axios';

export const getBlockDetails = ( blockhash ) => {
    
    var endpoint = `${process.env.REACT_APP_API_BLOCKS_DETAILS}/${blockhash}`;
  
    return async (dispatch) => {
      dispatch({
        type: 'BLOCK_LOADING'
      });
      return await axios({
        method: 'GET',
        url: endpoint
      })
        .then((blockObj) => {
          
          dispatch({
            type: 'BLOCK_SUCCESS',
            blockSelected: {
              ...blockObj.data
            }
          });
        })
        .catch((err) => {
          
          dispatch({
            type: 'BLOCK_ERROR',
            err,
            errorCode: 401
          });
        });
    };
  };