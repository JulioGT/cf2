const initState = {
    blocksLoading: false,
    blocksError: false
  };
  
  const getBlocksReducer = (state = initState, action) => {
    switch (action.type) {
      case 'BLOCKS_ERROR':
        return {
          ...state,
          ...action.blocks,
          blocksLoading: false,
          blocksError: true
        };
      case 'BLOCKS_SUCCESS':
        console.log(action);
        return {
          ...state,
          ...action.blocks,
          blocksLoading: false,
          blocksError: false
        };
      case 'BLOCKS_LOADING':
        return {
          ...state,
          blocksLoading: true,
          blocksError: false
        };
      default:
        return {
          ...state
        };
    }
  };
  
  export default getBlocksReducer;
  